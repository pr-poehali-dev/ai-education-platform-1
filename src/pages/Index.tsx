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

  const educationLevels = {
    'school': 'Школьная программа',
    'college': 'Среднее профессиональное',
    'university': 'Высшее образование'
  }

  const courses = {
    school: [
      // Начальная школа (1-4 классы)
      { id: 'math-1-4', title: 'Математика', grades: '1-4 классы', progress: 85, color: 'bg-blue-500' },
      { id: 'russian-1-4', title: 'Русский язык', grades: '1-4 классы', progress: 78, color: 'bg-red-500' },
      { id: 'literature-1-4', title: 'Литературное чтение', grades: '1-4 классы', progress: 90, color: 'bg-pink-500' },
      { id: 'world-1-4', title: 'Окружающий мир', grades: '1-4 классы', progress: 72, color: 'bg-green-500' },
      { id: 'english-1-4', title: 'Английский язык', grades: '2-4 классы', progress: 65, color: 'bg-indigo-500' },
      
      // Основная школа (5-9 классы)
      { id: 'math-5-9', title: 'Математика', grades: '5-6 классы', progress: 75, color: 'bg-blue-500' },
      { id: 'algebra-7-9', title: 'Алгебра', grades: '7-9 классы', progress: 68, color: 'bg-blue-600' },
      { id: 'geometry-7-9', title: 'Геометрия', grades: '7-9 классы', progress: 62, color: 'bg-cyan-500' },
      { id: 'russian-5-9', title: 'Русский язык', grades: '5-9 классы', progress: 80, color: 'bg-red-500' },
      { id: 'literature-5-9', title: 'Литература', grades: '5-9 классы', progress: 85, color: 'bg-pink-500' },
      { id: 'history-5-9', title: 'История', grades: '5-9 классы', progress: 70, color: 'bg-amber-600' },
      { id: 'social-6-9', title: 'Обществознание', grades: '6-9 классы', progress: 73, color: 'bg-orange-500' },
      { id: 'geography-5-9', title: 'География', grades: '5-9 классы', progress: 77, color: 'bg-emerald-500' },
      { id: 'biology-5-9', title: 'Биология', grades: '5-9 классы', progress: 82, color: 'bg-green-600' },
      { id: 'physics-7-9', title: 'Физика', grades: '7-9 классы', progress: 58, color: 'bg-purple-500' },
      { id: 'chemistry-8-9', title: 'Химия', grades: '8-9 классы', progress: 45, color: 'bg-yellow-500' },
      { id: 'english-5-9', title: 'Английский язык', grades: '5-9 классы', progress: 70, color: 'bg-indigo-500' },
      { id: 'informatics-7-9', title: 'Информатика', grades: '7-9 классы', progress: 88, color: 'bg-slate-600' },
      
      // Старшая школа (10-11 классы)
      { id: 'math-10-11', title: 'Математика (базовая)', grades: '10-11 классы', progress: 65, color: 'bg-blue-500' },
      { id: 'math-prof-10-11', title: 'Математика (профильная)', grades: '10-11 классы', progress: 55, color: 'bg-blue-600' },
      { id: 'russian-10-11', title: 'Русский язык', grades: '10-11 классы', progress: 75, color: 'bg-red-500' },
      { id: 'literature-10-11', title: 'Литература', grades: '10-11 классы', progress: 80, color: 'bg-pink-500' },
      { id: 'history-10-11', title: 'История', grades: '10-11 классы', progress: 68, color: 'bg-amber-600' },
      { id: 'social-10-11', title: 'Обществознание', grades: '10-11 классы', progress: 72, color: 'bg-orange-500' },
      { id: 'physics-10-11', title: 'Физика', grades: '10-11 классы', progress: 60, color: 'bg-purple-500' },
      { id: 'chemistry-10-11', title: 'Химия', grades: '10-11 классы', progress: 50, color: 'bg-yellow-500' },
      { id: 'biology-10-11', title: 'Биология', grades: '10-11 классы', progress: 78, color: 'bg-green-600' },
      { id: 'english-10-11', title: 'Английский язык', grades: '10-11 классы', progress: 73, color: 'bg-indigo-500' },
    ],
    
    college: [
      // Технические специальности
      { id: 'programming', title: 'Программирование', specialty: 'Информационные технологии', progress: 45, color: 'bg-slate-600' },
      { id: 'web-dev', title: 'Веб-разработка', specialty: 'ИТ', progress: 60, color: 'bg-blue-500' },
      { id: 'network-admin', title: 'Сетевое администрирование', specialty: 'ИТ', progress: 35, color: 'bg-green-500' },
      { id: 'electronics', title: 'Электроника и схемотехника', specialty: 'Радиотехника', progress: 40, color: 'bg-yellow-500' },
      { id: 'mechanics', title: 'Техническая механика', specialty: 'Машиностроение', progress: 55, color: 'bg-gray-600' },
      { id: 'automation', title: 'Автоматизация производства', specialty: 'Автоматика', progress: 38, color: 'bg-purple-500' },
      
      // Экономические специальности  
      { id: 'accounting', title: 'Бухгалтерский учёт', specialty: 'Экономика и управление', progress: 70, color: 'bg-emerald-500' },
      { id: 'management', title: 'Менеджмент', specialty: 'Управление', progress: 65, color: 'bg-orange-500' },
      { id: 'marketing', title: 'Маркетинг', specialty: 'Реклама', progress: 58, color: 'bg-pink-500' },
      { id: 'banking', title: 'Банковское дело', specialty: 'Финансы', progress: 42, color: 'bg-indigo-500' },
      
      // Гуманитарные и социальные
      { id: 'law-basics', title: 'Основы права', specialty: 'Правоведение', progress: 50, color: 'bg-red-500' },
      { id: 'psychology', title: 'Психология', specialty: 'Социальная работа', progress: 63, color: 'bg-teal-500' },
      { id: 'pedagogy', title: 'Педагогика', specialty: 'Образование', progress: 75, color: 'bg-cyan-500' },
      
      // Медицинские
      { id: 'nursing', title: 'Сестринское дело', specialty: 'Медицина', progress: 80, color: 'bg-red-400' },
      { id: 'pharmacy', title: 'Фармация', specialty: 'Медицина', progress: 60, color: 'bg-green-400' },
    ],
    
    university: [
      // Математика и естественные науки
      { id: 'higher-math', title: 'Высшая математика', faculty: 'Математический анализ', progress: 35, color: 'bg-blue-600' },
      { id: 'linear-algebra', title: 'Линейная алгебра', faculty: 'Математика', progress: 40, color: 'bg-cyan-600' },
      { id: 'discrete-math', title: 'Дискретная математика', faculty: 'ИТ/Математика', progress: 50, color: 'bg-indigo-600' },
      { id: 'physics-mechanics', title: 'Механика', faculty: 'Физика', progress: 45, color: 'bg-purple-600' },
      { id: 'quantum-physics', title: 'Квантовая физика', faculty: 'Физика', progress: 25, color: 'bg-violet-600' },
      { id: 'organic-chemistry', title: 'Органическая химия', faculty: 'Химия', progress: 55, color: 'bg-yellow-600' },
      
      // Информационные технологии
      { id: 'algorithms', title: 'Алгоритмы и структуры данных', faculty: 'Информатика', progress: 60, color: 'bg-slate-700' },
      { id: 'databases', title: 'Базы данных', faculty: 'ИТ', progress: 70, color: 'bg-green-700' },
      { id: 'software-engineering', title: 'Программная инженерия', faculty: 'ИТ', progress: 55, color: 'bg-blue-700' },
      { id: 'computer-networks', title: 'Компьютерные сети', faculty: 'ИТ', progress: 48, color: 'bg-emerald-600' },
      { id: 'ai-basics', title: 'Основы ИИ', faculty: 'ИТ', progress: 30, color: 'bg-pink-600' },
      { id: 'machine-learning', title: 'Машинное обучение', faculty: 'ИТ', progress: 25, color: 'bg-rose-600' },
      
      // Экономика и управление
      { id: 'microeconomics', title: 'Микроэкономика', faculty: 'Экономика', progress: 65, color: 'bg-amber-600' },
      { id: 'macroeconomics', title: 'Макроэкономика', faculty: 'Экономика', progress: 58, color: 'bg-orange-600' },
      { id: 'econometrics', title: 'Эконометрика', faculty: 'Экономика', progress: 40, color: 'bg-red-600' },
      { id: 'corporate-finance', title: 'Корпоративные финансы', faculty: 'Финансы', progress: 52, color: 'bg-green-600' },
      { id: 'strategic-management', title: 'Стратегический менеджмент', faculty: 'Управление', progress: 47, color: 'bg-indigo-700' },
      
      // Гуманитарные науки
      { id: 'philosophy', title: 'Философия', faculty: 'Гуманитарные науки', progress: 60, color: 'bg-gray-700' },
      { id: 'cultural-studies', title: 'Культурология', faculty: 'Гуманитарные науки', progress: 70, color: 'bg-purple-500' },
      { id: 'linguistics', title: 'Теоретическая лингвистика', faculty: 'Филология', progress: 55, color: 'bg-teal-600' },
      { id: 'constitutional-law', title: 'Конституционное право', faculty: 'Юриспруденция', progress: 48, color: 'bg-red-700' },
      { id: 'civil-law', title: 'Гражданское право', faculty: 'Юриспруденция', progress: 52, color: 'bg-red-500' },
      
      // Инженерные специальности
      { id: 'thermodynamics', title: 'Термодинамика', faculty: 'Инженерия', progress: 35, color: 'bg-orange-700' },
      { id: 'materials-science', title: 'Материаловедение', faculty: 'Инженерия', progress: 45, color: 'bg-gray-600' },
      { id: 'electrical-engineering', title: 'Электротехника', faculty: 'Энергетика', progress: 50, color: 'bg-yellow-700' },
      
      // Медицина и биология
      { id: 'anatomy', title: 'Анатомия человека', faculty: 'Медицина', progress: 75, color: 'bg-red-400' },
      { id: 'biochemistry', title: 'Биохимия', faculty: 'Медицина/Биология', progress: 58, color: 'bg-green-500' },
      { id: 'molecular-biology', title: 'Молекулярная биология', faculty: 'Биология', progress: 42, color: 'bg-emerald-700' },
    ]
  }

  const [selectedLevel, setSelectedLevel] = useState('school')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showLessons, setShowLessons] = useState(false)
  const [chatProgram, setChatProgram] = useState('general')

  const courseContent = {
    'math-5-9': {
      title: 'Математика 5-6 классы',
      description: 'Основы арифметики, дроби, проценты, начала алгебры',
      totalLessons: 48,
      modules: [
        {
          id: 1,
          title: 'Натуральные числа',
          lessons: [
            { id: 1, title: 'Обозначение натуральных чисел', duration: '45 мин', completed: true },
            { id: 2, title: 'Отрезок. Длина отрезка', duration: '45 мин', completed: true },
            { id: 3, title: 'Плоскость. Прямая. Луч', duration: '45 мин', completed: false },
            { id: 4, title: 'Шкалы и координаты', duration: '45 мин', completed: false },
          ]
        },
        {
          id: 2,
          title: 'Сложение и вычитание натуральных чисел',
          lessons: [
            { id: 5, title: 'Сложение натуральных чисел и его свойства', duration: '45 мин', completed: false },
            { id: 6, title: 'Вычитание натуральных чисел', duration: '45 мин', completed: false },
            { id: 7, title: 'Числовые и буквенные выражения', duration: '45 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Решение примеров на сложение', dueDate: '2024-08-15', status: 'completed', grade: 5 },
        { id: 2, title: 'Задачи на проценты', dueDate: '2024-08-18', status: 'pending', grade: null },
        { id: 3, title: 'Контрольная работа №1', dueDate: '2024-08-22', status: 'overdue', grade: null },
      ]
    },
    'russian-5-9': {
      title: 'Русский язык 5-9 классы',
      description: 'Фонетика, морфология, синтаксис, пунктуация, развитие речи',
      totalLessons: 68,
      modules: [
        {
          id: 1,
          title: 'Фонетика и орфоэпия',
          lessons: [
            { id: 1, title: 'Звуки речи. Система гласных звуков', duration: '45 мин', completed: true },
            { id: 2, title: 'Система согласных звуков', duration: '45 мин', completed: true },
            { id: 3, title: 'Изменение звуков в речевом потоке', duration: '45 мин', completed: false },
          ]
        },
        {
          id: 2,
          title: 'Лексикология и фразеология',
          lessons: [
            { id: 4, title: 'Слово как единица языка', duration: '45 мин', completed: false },
            { id: 5, title: 'Однозначные и многозначные слова', duration: '45 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Фонетический разбор слов', dueDate: '2024-08-16', status: 'completed', grade: 4 },
        { id: 2, title: 'Сочинение "Мой любимый день"', dueDate: '2024-08-20', status: 'in_progress', grade: null },
      ]
    },
    'programming': {
      title: 'Программирование (СПО)',
      description: 'Основы программирования, алгоритмы, структуры данных',
      totalLessons: 120,
      modules: [
        {
          id: 1,
          title: 'Основы программирования',
          lessons: [
            { id: 1, title: 'Введение в программирование', duration: '90 мин', completed: true },
            { id: 2, title: 'Переменные и типы данных', duration: '90 мин', completed: true },
            { id: 3, title: 'Условные конструкции', duration: '90 мин', completed: false },
            { id: 4, title: 'Циклы', duration: '90 мин', completed: false },
          ]
        },
        {
          id: 2,
          title: 'Структуры данных',
          lessons: [
            { id: 5, title: 'Массивы', duration: '90 мин', completed: false },
            { id: 6, title: 'Списки и кортежи', duration: '90 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Написать программу "Калькулятор"', dueDate: '2024-08-25', status: 'in_progress', grade: null },
        { id: 2, title: 'Решить задачи на массивы', dueDate: '2024-08-28', status: 'pending', grade: null },
      ]
    },
    'higher-math': {
      title: 'Высшая математика',
      description: 'Математический анализ, линейная алгебра, дифференциальные уравнения',
      totalLessons: 144,
      modules: [
        {
          id: 1,
          title: 'Введение в математический анализ',
          lessons: [
            { id: 1, title: 'Множества и операции над ними', duration: '90 мин', completed: true },
            { id: 2, title: 'Функции и их свойства', duration: '90 мин', completed: true },
            { id: 3, title: 'Предел функции', duration: '90 мин', completed: false },
            { id: 4, title: 'Непрерывность функции', duration: '90 мин', completed: false },
          ]
        },
        {
          id: 2,
          title: 'Дифференциальное исчисление',
          lessons: [
            { id: 5, title: 'Производная функции', duration: '90 мин', completed: false },
            { id: 6, title: 'Правила дифференцирования', duration: '90 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Вычислить пределы функций', dueDate: '2024-08-20', status: 'completed', grade: 4 },
        { id: 2, title: 'Найти производные сложных функций', dueDate: '2024-08-25', status: 'pending', grade: null },
      ]
    },
    // Добавляем универсальный контент для всех курсов
    'math-1-4': {
      title: 'Математика 1-4 классы',
      description: 'Основы арифметики для начальной школы',
      totalLessons: 32,
      modules: [
        {
          id: 1,
          title: 'Числа от 1 до 100',
          lessons: [
            { id: 1, title: 'Счёт предметов', duration: '35 мин', completed: true },
            { id: 2, title: 'Сравнение чисел', duration: '35 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Решение примеров на сложение', dueDate: '2024-08-15', status: 'completed', grade: 5 },
      ]
    },
    'physics-7-9': {
      title: 'Физика 7-9 классы',
      description: 'Механика, тепловые явления, электричество',
      totalLessons: 68,
      modules: [
        {
          id: 1,
          title: 'Первоначальные сведения о строении вещества',
          lessons: [
            { id: 1, title: 'Что изучает физика', duration: '45 мин', completed: true },
            { id: 2, title: 'Молекулы и атомы', duration: '45 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Лабораторная работа "Измерение объёма тела"', dueDate: '2024-08-20', status: 'pending', grade: null },
      ]
    },
    'algorithms': {
      title: 'Алгоритмы и структуры данных',
      description: 'Основные алгоритмы программирования',
      totalLessons: 60,
      modules: [
        {
          id: 1,
          title: 'Сложность алгоритмов',
          lessons: [
            { id: 1, title: 'Введение в анализ алгоритмов', duration: '90 мин', completed: true },
            { id: 2, title: 'Временная сложность O-notation', duration: '90 мин', completed: false },
          ]
        }
      ],
      homework: [
        { id: 1, title: 'Реализация алгоритма сортировки', dueDate: '2024-08-25', status: 'in_progress', grade: null },
      ]
    }
  }

  const generateDefaultContent = (courseId, title, description) => ({
    title,
    description,
    totalLessons: 24,
    modules: [
      {
        id: 1,
        title: 'Введение',
        lessons: [
          { id: 1, title: 'Основные понятия', duration: '45 мин', completed: false },
          { id: 2, title: 'Методы изучения', duration: '45 мин', completed: false },
          { id: 3, title: 'Практические применения', duration: '45 мин', completed: false },
        ]
      },
      {
        id: 2,
        title: 'Основы',
        lessons: [
          { id: 4, title: 'Теоретические основы', duration: '45 мин', completed: false },
          { id: 5, title: 'Практические задания', duration: '45 мин', completed: false },
        ]
      }
    ],
    homework: [
      { id: 1, title: 'Вводное задание', dueDate: '2024-08-20', status: 'pending', grade: null },
      { id: 2, title: 'Практическая работа', dueDate: '2024-08-25', status: 'pending', grade: null },
    ]
  })

  const getCourseContent = (courseId, courseTitle = '', courseDescription = '') => {
    return courseContent[courseId] || generateDefaultContent(courseId, courseTitle, courseDescription)
  }

  const chatPrograms = {
    general: 'Общие вопросы',
    'math-elementary': 'Математика (1-4 классы)',
    'math-middle': 'Математика (5-9 классы)', 
    'math-high': 'Математика (10-11 классы)',
    'russian': 'Русский язык',
    'physics': 'Физика',
    'chemistry': 'Химия',
    'biology': 'Биология',
    'history': 'История',
    'programming': 'Программирование',
    'higher-math': 'Высшая математика',
  }

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
              <h2 className="text-3xl font-bold">Образовательные программы</h2>
              <p className="text-gray-600">Полный спектр российского образования</p>
            </div>
            
            {/* Education Level Selector */}
            <div className="flex justify-center">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {Object.entries(educationLevels).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedLevel === key ? "default" : "ghost"}
                    onClick={() => setSelectedLevel(key)}
                    className="px-6"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            {/* School Courses */}
            {selectedLevel === 'school' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2 text-blue-500" />
                    Начальная школа (1-4 классы)
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {courses.school.filter(course => course.grades?.includes('1-4')).map((course) => (
                      <Card key={course.id} className="hover-scale">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{course.title}</CardTitle>
                            <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                          </div>
                          <p className="text-xs text-gray-500">{course.grades}</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Прогресс</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5" />
                          </div>
                          <Button size="sm" className="w-full" onClick={() => {
                            setSelectedCourse(course.id)
                            setShowLessons(true)
                          }}>
                            <Icon name="Play" size={14} className="mr-1" />
                            Изучать
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="GraduationCap" size={20} className="mr-2 text-green-500" />
                    Основная школа (5-9 классы)
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {courses.school.filter(course => course.grades?.includes('5-') || course.grades?.includes('6-') || course.grades?.includes('7-') || course.grades?.includes('8-')).map((course) => (
                      <Card key={course.id} className="hover-scale">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{course.title}</CardTitle>
                            <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                          </div>
                          <p className="text-xs text-gray-500">{course.grades}</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Прогресс</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5" />
                          </div>
                          <Button size="sm" className="w-full" onClick={() => {
                            setSelectedCourse(course.id)
                            setShowLessons(true)
                          }}>
                            <Icon name="Play" size={14} className="mr-1" />
                            Изучать
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Trophy" size={20} className="mr-2 text-purple-500" />
                    Старшая школа (10-11 классы)
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {courses.school.filter(course => course.grades?.includes('10-11')).map((course) => (
                      <Card key={course.id} className="hover-scale">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{course.title}</CardTitle>
                            <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                          </div>
                          <p className="text-xs text-gray-500">{course.grades}</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Прогресс</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5" />
                          </div>
                          <Button size="sm" className="w-full" onClick={() => {
                            setSelectedCourse(course.id)
                            setShowLessons(true)
                          }}>
                            <Icon name="Play" size={14} className="mr-1" />
                            Изучать
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* College Courses */}
            {selectedLevel === 'college' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.college.map((course) => (
                  <Card key={course.id} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <div className={`w-4 h-4 rounded-full ${course.color}`}></div>
                      </div>
                      <p className="text-sm text-gray-500">{course.specialty}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full" onClick={() => {
                        setSelectedCourse(course.id)
                        setShowLessons(true)
                      }}>
                        <Icon name="Play" size={16} className="mr-2" />
                        Продолжить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* University Courses */}
            {selectedLevel === 'university' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.university.map((course) => (
                  <Card key={course.id} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <div className={`w-4 h-4 rounded-full ${course.color}`}></div>
                      </div>
                      <p className="text-sm text-gray-500">{course.faculty}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full" onClick={() => {
                        setSelectedCourse(course.id)
                        setShowLessons(true)
                      }}>
                        <Icon name="Play" size={16} className="mr-2" />
                        Продолжить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Course Details Modal */}
            {showLessons && selectedCourse && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{getCourseContent(selectedCourse).title}</h2>
                        <p className="text-gray-600 mt-1">{getCourseContent(selectedCourse).description}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setShowLessons(false)}>
                        <Icon name="X" size={20} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex h-[calc(90vh-120px)]">
                    {/* Course Content */}
                    <div className="flex-1 p-6 overflow-y-auto">
                      <Tabs defaultValue="lessons" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                          <TabsTrigger value="lessons">Уроки</TabsTrigger>
                          <TabsTrigger value="homework">Домашние задания</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="lessons" className="space-y-6">
                          {getCourseContent(selectedCourse).modules.map((module) => (
                            <Card key={module.id}>
                              <CardHeader>
                                <CardTitle className="text-lg">{module.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  {module.lessons.map((lesson) => (
                                    <div key={lesson.id} className={`flex items-center justify-between p-3 rounded-lg border ${lesson.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                                      <div className="flex items-center space-x-3">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                          {lesson.completed ? (
                                            <Icon name="Check" size={16} />
                                          ) : (
                                            <span className="text-xs">{lesson.id}</span>
                                          )}
                                        </div>
                                        <div>
                                          <h4 className="font-medium">{lesson.title}</h4>
                                          <p className="text-sm text-gray-500">{lesson.duration}</p>
                                        </div>
                                      </div>
                                      <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                                        {lesson.completed ? 'Повторить' : 'Изучить'}
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                        
                        <TabsContent value="homework" className="space-y-4">
                          {getCourseContent(selectedCourse).homework.map((hw) => (
                            <Card key={hw.id}>
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-medium">{hw.title}</h4>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                      <span>Срок: {hw.dueDate}</span>
                                      {hw.grade && <span>Оценка: {hw.grade}</span>}
                                    </div>
                                  </div>
                                  <Badge variant={
                                    hw.status === 'completed' ? 'default' :
                                    hw.status === 'in_progress' ? 'secondary' :
                                    hw.status === 'overdue' ? 'destructive' : 'outline'
                                  }>
                                    {hw.status === 'completed' ? 'Выполнено' :
                                     hw.status === 'in_progress' ? 'В работе' :
                                     hw.status === 'overdue' ? 'Просрочено' : 'Ожидает'}
                                  </Badge>
                                </div>
                                <div className="mt-3 flex space-x-2">
                                  <Button size="sm" variant="outline">
                                    <Icon name="FileText" size={14} className="mr-1" />
                                    Условие
                                  </Button>
                                  {hw.status !== 'completed' && (
                                    <Button size="sm">
                                      <Icon name="Upload" size={14} className="mr-1" />
                                      Сдать работу
                                    </Button>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                    {/* Program Selector */}
                    <div className="mt-4">
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Выберите предмет:</label>
                      <select 
                        value={chatProgram} 
                        onChange={(e) => setChatProgram(e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded-md text-sm"
                      >
                        {Object.entries(chatPrograms).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
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
                      <p>🎯 <strong>Фокус:</strong> {chatPrograms[chatProgram]}</p>
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