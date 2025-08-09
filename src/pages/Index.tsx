import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [messages, setMessages] = useState([
    { id: 1, text: 'Привет! Я ваш AI-учитель. Готовы начать обучение?', sender: 'ai' },
    { id: 2, text: 'Да, давайте изучать математику!', sender: 'user' },
    { id: 3, text: 'Отлично! Начнем с основ алгебры. Ваш адаптивный план уже готов.', sender: 'ai' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const courses = [
    { id: 1, title: 'Математика', progress: 75, level: 'Средний', color: 'bg-blue-500' },
    { id: 2, title: 'Программирование', progress: 45, level: 'Начальный', color: 'bg-purple-500' },
    { id: 3, title: 'Физика', progress: 30, level: 'Продвинутый', color: 'bg-green-500' }
  ]

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'user' }])
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: 'Понял! Адаптирую материал под ваш уровень знаний.', 
          sender: 'ai' 
        }])
      }, 1000)
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduAI Platform
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => setActiveTab('home')}>
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('courses')}>
                <Icon name="BookOpen" size={16} className="mr-2" />
                Курсы
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('progress')}>
                <Icon name="BarChart" size={16} className="mr-2" />
                Прогресс
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('chat')}>
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Чат-учитель
              </Button>
              <Button variant="outline">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Hero Section */}
          <TabsContent value="home" className="space-y-8">
            <div className="text-center space-y-6 py-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Персонализированное AI Обучение
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Адаптивные учебные планы, созданные специально для вас искусственным интеллектом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" onClick={() => setActiveTab('chat')}>
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab('courses')}>
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Посмотреть курсы
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Brain" size={24} className="mr-3 text-blue-500" />
                    AI-Адаптация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Умный алгоритм подстраивает сложность и темп обучения под ваши способности
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageSquare" size={24} className="mr-3 text-purple-500" />
                    Чат-учитель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Персональный AI-ассистент отвечает на вопросы 24/7 и помогает решать задачи
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" size={24} className="mr-3 text-green-500" />
                    Прогресс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Детальная аналитика успеваемости и рекомендации по улучшению результатов
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Section */}
          <TabsContent value="courses" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Ваши курсы</h2>
              <p className="text-gray-600">Адаптивные программы обучения</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Прогресс</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button className="w-full">
                      <Icon name="Play" size={16} className="mr-2" />
                      Продолжить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Section */}
          <TabsContent value="progress" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Ваш прогресс</h2>
              <p className="text-gray-600">Аналитика обучения и достижения</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500">42</div>
                  <p className="text-sm text-gray-600">Часов обучения</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-500">3</div>
                  <p className="text-sm text-gray-600">Курса завершено</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-500">127</div>
                  <p className="text-sm text-gray-600">Задач решено</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500">89%</div>
                  <p className="text-sm text-gray-600">Средний результат</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Активность за неделю</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
                    <div key={day} className="flex items-center space-x-4">
                      <div className="w-8 text-sm font-medium">{day}</div>
                      <Progress value={Math.random() * 100} className="flex-1" />
                      <div className="w-12 text-sm text-gray-600">{Math.floor(Math.random() * 4)}ч</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Chat Teacher Section */}
          <TabsContent value="chat" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Chat Interface */}
              <div className="lg:col-span-2">
                <Card className="h-[600px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Bot" size={24} className="mr-3 text-blue-500" />
                      AI-Учитель
                      <Badge className="ml-auto bg-green-100 text-green-800">Online</Badge>
                    </CardTitle>
                  </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Задайте вопрос AI-учителю..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage}>
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
                </Card>
              </div>

              {/* AI Teaching Tools */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Инструменты обучения</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Icon name="PenTool" size={16} className="mr-2" />
                      Виртуальная доска
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Icon name="Calculator" size={16} className="mr-2" />
                      Калькулятор
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Генератор задач
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить файл
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Быстрые действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start text-sm" variant="ghost" 
                      onClick={() => {
                        setMessages(prev => [...prev, { 
                          id: Date.now(), 
                          text: 'Объясни мне эту тему простыми словами', 
                          sender: 'user' 
                        }])
                      }}>
                      💡 "Объясни простыми словами"
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="ghost"
                      onClick={() => {
                        setMessages(prev => [...prev, { 
                          id: Date.now(), 
                          text: 'Дай мне практические задания', 
                          sender: 'user' 
                        }])
                      }}>
                      📝 "Дай практические задания"
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="ghost"
                      onClick={() => {
                        setMessages(prev => [...prev, { 
                          id: Date.now(), 
                          text: 'Проверь мое решение', 
                          sender: 'user' 
                        }])
                      }}>
                      ✅ "Проверь мое решение"
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="ghost"
                      onClick={() => {
                        setMessages(prev => [...prev, { 
                          id: Date.now(), 
                          text: 'Покажи пример', 
                          sender: 'user' 
                        }])
                      }}>
                      📖 "Покажи пример"
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Подсказки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>💡 <strong>Совет:</strong> Задавайте конкретные вопросы</p>
                      <p>🎯 <strong>Фокус:</strong> Математика (Алгебра)</p>
                      <p>⭐ <strong>Уровень:</strong> Средний</p>
                      <p>📈 <strong>Прогресс:</strong> 75% завершено</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Index;