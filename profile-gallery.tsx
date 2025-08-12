"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Check } from "lucide-react"

const profileImages = [
  {
    id: 1,
    name: "プロフェッショナル",
    description: "ビジネス向けの洗練されたスタイル",
    src: "/images/profile-professional.png",
    category: "ビジネス",
  },
  {
    id: 2,
    name: "カジュアル",
    description: "親しみやすく温かみのあるスタイル",
    src: "/images/profile-casual.png",
    category: "カジュアル",
  },
  {
    id: 3,
    name: "クリエイティブ",
    description: "アーティスティックで個性的なスタイル",
    src: "/images/profile-creative.png",
    category: "アート",
  },
  {
    id: 4,
    name: "ミニマル",
    description: "シンプルで洗練されたデザイン",
    src: "/images/profile-minimal.png",
    category: "ミニマル",
  },
  {
    id: 5,
    name: "テック系",
    description: "モダンでテクノロジー感のあるスタイル",
    src: "/images/profile-tech.png",
    category: "テック",
  },
  {
    id: 6,
    name: "温かみのある",
    description: "優しく親近感のあるスタイル",
    src: "/images/profile-warm.png",
    category: "フレンドリー",
  },
]

export default function ProfileGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">プロフィール画像ギャラリー</h1>
        <p className="text-muted-foreground">あなたにぴったりのプロフィール画像を選択してください</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileImages.map((image) => (
          <Card
            key={image.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedImage === image.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedImage(image.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{image.name}</CardTitle>
                  <CardDescription className="text-sm">{image.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {image.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square mb-4">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {selectedImage === image.id && (
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
              <Button
                variant={selectedImage === image.id ? "default" : "outline"}
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(image.id)
                }}
              >
                {selectedImage === image.id ? "選択済み" : "選択する"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <div className="mt-8 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>選択されたプロフィール画像</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square w-32 h-32 mx-auto mb-4">
                <Image
                  src={profileImages.find((img) => img.id === selectedImage)?.src || ""}
                  alt="選択されたプロフィール画像"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {profileImages.find((img) => img.id === selectedImage)?.name}スタイルが選択されています
              </p>
              <Button className="w-full">プロフィールに設定</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
