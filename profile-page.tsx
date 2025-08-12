"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { MapPin, Calendar, Edit, Settings, Share2 } from "lucide-react"

export default function ProfilePage() {
  const userProfile = {
    name: "小山 龍馬",
    username: "@Oyama_Ryoma",
    bio: "専門学校でプログラミングを学んでいる学生｜新しいことに挑戦することが好きです",
    location: "福岡, 日本",
    joinDate: "2024年4月",
    email: "tanaka@example.com",
    phone: "+81-90-1234-5678",
    website: "https://tanaka-portfolio.com",
    profileImage: "/images/custom-profile.jpeg",
    coverImage: "/modern-office.png",
    stats: {
      projects: 24,
      followers: 1250,
      following: 180,
    },
    skills: ["Java", "Python"],
    interests: ["プログラミング", "読書", "麻雀", "野球観戦"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* カバー画像とプロフィール画像 */}
      <div className="relative">
        <div className="h-56 md:h-72 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 relative overflow-hidden">
          <Image
            src="/images/baseball-stadium-field.jpg"
            alt="野球場の背景"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none">
          <div className="relative w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 backdrop-blur-sm">
            <Image
              src={userProfile.profileImage || "/placeholder.svg"}
              alt={userProfile.name}
              fill
              className="object-cover"
              priority={true}
              quality={85}
              sizes="160px"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-blue-400/30 ring-offset-4 ring-offset-transparent" />
          </div>
        </div>

        {/* アクションボタン */}
        <div className="absolute top-6 right-6 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Share2 className="h-4 w-4 mr-2" />
            共有
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Edit className="h-4 w-4 mr-2" />
            編集
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 pt-24 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム - 基本情報 */}
          <div className="lg:col-span-1 space-y-6">
            {/* プロフィール基本情報 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader className="text-center md:text-left pb-4">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {userProfile.name}
                </CardTitle>
                <CardDescription className="text-xl text-slate-300">{userProfile.username}</CardDescription>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{userProfile.bio}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  {userProfile.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  {userProfile.joinDate}に参加
                </div>

                <Separator className="bg-slate-700/50" />

                {/* 統計情報 */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-blue-400">{userProfile.stats.projects}</div>
                    <div className="text-xs text-slate-400">プロジェクト</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-cyan-400">{userProfile.stats.followers}</div>
                    <div className="text-xs text-slate-400">フォロワー</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-purple-400">{userProfile.stats.following}</div>
                    <div className="text-xs text-slate-400">フォロー中</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 連絡先情報 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">連絡先</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm group">
                  <svg
                    className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <a
                    href="https://github.com/ryosaburo"
                    className="text-slate-300 hover:text-blue-400 hover:underline break-all transition-colors duration-300"
                  >
                    github.com/ryosaburo
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm group">
                  <svg
                    className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <a
                    href="https://x.com/ryousaburou"
                    className="text-slate-300 hover:text-blue-400 hover:underline break-all transition-colors duration-300"
                  >
                    x.com/ryousaburou
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* スキル */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">スキル</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {userProfile.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右カラム - 詳細情報 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 興味・関心 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">興味・関心</CardTitle>
                <CardDescription className="text-slate-400">私が興味を持っていることや趣味について</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {userProfile.interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 px-4 py-2"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 最近のアクティビティ */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">最近のアクティビティ</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>

            {/* プロジェクト */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">注目のプロジェクト</CardTitle>
                <CardDescription className="text-slate-400">最近取り組んでいるプロジェクトの一部</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
