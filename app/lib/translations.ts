export type Lang = 'tr' | 'en' | 'ru';

export const translations = {
  tr: {
    nav: {
      services: 'Hizmetler',
      process: 'Süreç',
      benefits: 'Avantajlar',
      testimonials: 'Referanslar',
      faq: 'SSS',
      cta: 'Hemen Başlayın',
    },
    hero: {
      badge: 'Yapay Zeka Ajansı',
      title1: 'İşinizi',
      title2: 'Yapay Zeka ile',
      title3: 'Dönüştürün',
      subtitle:
        'Chatbot, otomasyon, web ve mobil uygulama çözümleriyle işletmenizi dijital çağa taşıyoruz. Rekabette öne geçin.',
      cta1: 'Hemen Başlayın',
      cta2: 'Daha Fazla Bilgi',
      stat1: { value: '30+', label: 'Tamamlanan Proje' },
      stat2: { value: '98%', label: 'Müşteri Memnuniyeti' },
      stat3: { value: '24/7', label: 'Destek' },
      floatChat1: 'Merhaba! Size nasıl yardımcı olabilirim? 🤖',
      floatChat2: 'Ürünlerim hakkında bilgi almak istiyorum.',
      floatChat3: 'Tabii ki! Hangi ürünü merak ediyorsunuz?',
      floatPlaceholder: 'Mesaj yazın...',
      floatLabel: 'VisionBot',
      floatMetricLabel: 'Aktif Kullanıcı',
      floatMetricValue: '2,847',
      floatMetricTrend: '↑ +18% bu hafta',
      floatAutoLabel: 'Otomasyon Oranı',
      floatAutoValue: '98.5%',
    },
    services: {
      badge: '01 — Hizmetlerimiz',
      title1: 'AI Destekli',
      title2: 'Çözümler',
      subtitle:
        'İşletmenizin ihtiyaçlarına özel yapay zeka çözümleri sunuyoruz. Her hizmet, büyümenizi hızlandırmak için tasarlanmıştır.',
      items: [
        {
          title: 'AI Chatbot',
          desc: 'Müşterinizle gereken her şeyi konuşur, siz dinlenirken',
          badges: ['7/24 Aktif', 'Yapay Zeka', 'Müşteri Yönetimi'],
        },
        {
          title: 'İş Otomasyonu',
          desc: 'Tekrar eden işler artık kendi kendine çalışır',
          badges: ['Otomasyon', 'İş Akışı', 'Entegrasyon'],
        },
        {
          title: 'Web Geliştirme',
          desc: 'Ziyaretçiyi müşteriye çeviren siteler',
          badges: ['Hızlı', 'SEO', 'Mobil Uyumlu'],
        },
        {
          title: 'İçerik Üretimi',
          desc: 'Yaratıcı içerikler, markanızı öne çıkarır',
          badges: ['Yapay Zeka', 'Video', 'Sosyal Medya'],
        },
      ],
    },
    process: {
      badge: '02 — Nasıl Çalışır',
      title1: 'Basit ve Etkili',
      title2: 'Süreç',
      subtitle: '4 adımda projenizi hayata geçiriyoruz. Şeffaf, hızlı ve sonuç odaklı bir yaklaşım.',
      steps: [
        {
          num: '01',
          title: 'Keşif & Analiz',
          desc: 'İşletmenizin ihtiyaçlarını detaylı analiz eder, rekabetçi pazar araştırması yaparak size özel çözüm stratejisi oluştururuz.',
        },
        {
          num: '02',
          title: 'Tasarım & Planlama',
          desc: 'Kullanıcı deneyimini ön planda tutarak modern ve etkileyici tasarımlar hazırlar, proje yol haritası belirleriz.',
        },
        {
          num: '03',
          title: 'Geliştirme',
          desc: 'En güncel teknolojilerle hızlı, güvenli ve ölçeklenebilir çözümler geliştiririz. Düzenli ilerleme raporları sunarız.',
        },
        {
          num: '04',
          title: 'Lansman & Destek',
          desc: 'Projenizi canlıya alır, sürekli destek ve optimizasyon hizmeti sunarız. Başarınızı birlikte takip ederiz.',
        },
      ],
    },
    benefits: {
      badge: '03 — Neden Biz',
      title1: 'VisionDelTurco\'yu',
      title2: 'Seçin',
      subtitle: 'Rakiplerinizin önüne geçmenizi sağlayan avantajlar. Her projede mükemmeliyeti hedefleriz.',
      items: [
        {
          icon: '🚀',
          title: 'Hızlı Teslimat',
          desc: 'Projelerinizi belirlenen sürede ve kaliteden ödün vermeden teslim ediyoruz.',
        },
        {
          icon: '🔒',
          title: 'Güvenli Çözümler',
          desc: 'En yüksek güvenlik standartlarıyla korunan sistemler geliştiriyoruz.',
        },
        {
          icon: '📊',
          title: 'Veri Odaklı',
          desc: 'Kararlarınızı gerçek verilerle destekleyen analitik araçlar sunuyoruz.',
        },
        {
          title: 'Verimli Sonuçlar',
          desc: 'Projelerinizde ölçülebilir sonuçlar ve sürdürülebilir büyüme sağlıyoruz.',
        },
        {
          title: 'İnovatif Yaklaşım',
          desc: 'En güncel AI teknolojilerini işinize entegre ediyoruz.',
        },
        {
          title: 'Sürekli Destek',
          desc: 'Proje sonrasında da yanınızdayız, her adımda destek sağlıyoruz.',
        },
      ],
    },
    testimonials: {
      badge: '04 — Referanslar',
      title1: 'Müşterilerimiz',
      title2: 'Ne Diyor',
      items: [
        {
          quote:
            'VisionDelTurco\'nun AI chatbot çözümü müşteri hizmetlerimizi tamamen dönüştürdü. Memnuniyet oranımız %40 arttı ve ekibimiz artık stratejik işlere odaklanabiliyor.',
          name: 'Ahmet Yılmaz',
          role: 'CEO',
          company: 'TechStart TR',
          rating: 5,
        },
        {
          quote:
            'Otomasyon sistemleri sayesinde operasyonel maliyetlerimizi %35 düşürdük. VisionDelTurco ekibi son derece profesyonel ve çözüm odaklı çalışıyor.',
          name: 'Maria Ivanova',
          role: 'COO',
          company: 'GlobalBiz RU',
          rating: 5,
        },
        {
          quote:
            'Web ve mobil uygulamamız beklentilerimizin çok üzerinde çıktı. Hem zamanında teslim ettiler hem de proaktif destek sağladılar. Kesinlikle tavsiye ediyoruz.',
          name: 'James Wilson',
          role: 'Founder',
          company: 'DigitalFirst',
          rating: 5,
        },
      ],
    },
    faq: {
      badge: '05 — Sıkça Sorulan Sorular',
      title1: 'Aklınızdaki',
      title2: 'Sorular',
      items: [
        {
          q: 'Hangi sektörlere hizmet veriyorsunuz?',
          a: 'E-ticaret, fintech, sağlık, eğitim, turizm, lojistik ve daha birçok sektörde AI çözümleri sunuyoruz. Her sektöre özel yaklaşım ve deneyimle çalışıyoruz.',
        },
        {
          q: 'Proje süresi ne kadar?',
          a: 'Proje kapsamına göre değişmekle birlikte, çoğu proje 1-4 hafta arasında tamamlanmaktadır. Chatbot ve otomasyon projeleri 1-2 hafta, web/mobil projeler ise projeye göre 8 haftaya kadar sürebilmektedir.',
        },
        {
          q: 'Fiyatlandırma nasıl yapılıyor?',
          a: 'Projenizin ihtiyaçlarına göre özelleştirilmiş fiyat teklifi sunuyoruz. Ücretsiz ilk danışmanlık görüşmesinde proje kapsamını belirleyerek şeffaf bir teklif hazırlıyoruz.',
        },
        {
          q: 'Proje sonrası destek sağlıyor musunuz?',
          a: 'Evet, tüm projelerimizde 3 aylık ücretsiz destek ve bakım hizmeti sunuyoruz. Uzun vadeli bakım ve geliştirme paketlerimiz de mevcuttur.',
        },
        {
          q: 'Mevcut sistemlerimizle entegrasyon mümkün mü?',
          a: 'Kesinlikle. Mevcut CRM, ERP, e-ticaret platformları, ödeme sistemleri ve diğer yazılımlarınızla sorunsuz entegrasyon sağlıyoruz.',
        },
        {
          q: 'Proje sürecinde nasıl iletişim kuruyoruz?',
          a: 'Düzenli haftalık toplantılar, proje yönetim araçları (Jira, Notion) ve anlık mesajlaşma kanalları üzerinden şeffaf iletişim kuruyoruz.',
        },
      ],
    },
    cta: {
      badge: 'Ücretsiz Danışmanlık',
      title1: 'Projenizi Hayata Geçirelim',
      title2: '',
      subtitle: 'Bugün ücretsiz danışmanlık alın.',
      btn1: 'Hemen Başlayın →',
      btn2: 'Portföyü İncele',
    },
    footer: {
      desc: 'Yapay zeka ile işinizi geleceğe taşıyoruz.',
      col1: 'Hizmetler',
      col1Links: ['AI Chatbot', 'İş Otomasyonu', 'Web Geliştirme', 'İçerik Üretimi'],
      col2: 'Şirket',
      col2Links: ['Hakkımızda', 'Portföy'],
      col3: 'İletişim',
      email: 'visiondelturco@gmail.com',

      rights: 'Tüm hakları saklıdır.',
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      benefits: 'Benefits',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      cta: 'Get Started',
    },
    hero: {
      badge: 'AI Agency',
      title1: 'Transform',
      title2: 'Your Business',
      title3: 'with AI',
      subtitle:
        'We bring your business into the digital age with chatbot, automation, web and mobile app solutions. Stay ahead of the competition.',
      cta1: 'Get Started',
      cta2: 'Learn More',
      stat1: { value: '30+', label: 'Completed Projects' },
      stat2: { value: '98%', label: 'Client Satisfaction' },
      stat3: { value: '24/7', label: 'Support' },
      floatChat1: 'Hello! How can I help you today? 🤖',
      floatChat2: "I'd like to learn about your products.",
      floatChat3: 'Of course! Which product are you interested in?',
      floatPlaceholder: 'Type a message...',
      floatLabel: 'VisionBot',
      floatMetricLabel: 'Active Users',
      floatMetricValue: '2,847',
      floatMetricTrend: '↑ +18% this week',
      floatAutoLabel: 'Automation Rate',
      floatAutoValue: '98.5%',
    },
    services: {
      badge: '01 — Our Services',
      title1: 'AI-Powered',
      title2: 'Solutions',
      subtitle:
        'We deliver custom artificial intelligence solutions tailored to your business needs. Every service is designed to accelerate your growth.',
      items: [
        {
          title: 'AI Chatbot',
          desc: 'Handles every customer conversation while you rest',
          badges: ['24/7 Active', 'AI Powered', 'CRM Ready'],
        },
        {
          title: 'Business Automation',
          desc: 'Repetitive tasks now run on their own',
          badges: ['Automation', 'Workflow', 'Integration'],
        },
        {
          title: 'Web Development',
          desc: 'Websites that turn visitors into customers',
          badges: ['Fast', 'SEO', 'Responsive'],
        },
        {
          title: 'Content Creation',
          desc: 'Creative content that makes your brand stand out',
          badges: ['AI Generated', 'Video', 'Social Media'],
        },
      ],
    },
    process: {
      badge: '02 — How It Works',
      title1: 'Simple and Effective',
      title2: 'Process',
      subtitle: 'We bring your project to life in 4 steps. Transparent, fast, and results-oriented.',
      steps: [
        {
          num: '01',
          title: 'Discovery & Analysis',
          desc: 'We thoroughly analyze your business needs, conduct competitive market research, and create a custom solution strategy.',
        },
        {
          num: '02',
          title: 'Design & Planning',
          desc: 'We prepare modern and impressive designs with user experience at the forefront and define the project roadmap.',
        },
        {
          num: '03',
          title: 'Development',
          desc: 'We develop fast, secure and scalable solutions with the latest technologies. We provide regular progress reports.',
        },
        {
          num: '04',
          title: 'Launch & Support',
          desc: 'We launch your project and provide continuous support and optimization services. We track your success together.',
        },
      ],
    },
    benefits: {
      badge: '03 — Why Us',
      title1: 'Choose',
      title2: 'VisionDelTurco',
      subtitle: 'Advantages that keep you ahead of competitors. We aim for excellence in every project.',
      items: [
        {
          icon: '🚀',
          title: 'Fast Delivery',
          desc: 'We deliver your projects on time without compromising on quality.',
        },
        {
          icon: '🔒',
          title: 'Secure Solutions',
          desc: 'We develop systems protected by the highest security standards.',
        },
        {
          icon: '📊',
          title: 'Data-Driven',
          desc: 'We provide analytical tools that support your decisions with real data.',
        },
        {
          title: 'Efficient Results',
          desc: 'We deliver measurable results and sustainable growth in every project.',
        },
        {
          title: 'Innovative Approach',
          desc: 'We integrate the latest AI technologies into your business.',
        },
        {
          title: 'Ongoing Support',
          desc: 'We stay by your side even after the project, supporting every step.',
        },
      ],
    },
    testimonials: {
      badge: '04 — Testimonials',
      title1: "What Our",
      title2: 'Clients Say',
      items: [
        {
          quote:
            "VisionDelTurco's AI chatbot solution completely transformed our customer service. Our satisfaction rate increased by 40% and our team can now focus on strategic work.",
          name: 'Ahmet Yılmaz',
          role: 'CEO',
          company: 'TechStart TR',
          rating: 5,
        },
        {
          quote:
            'Thanks to automation systems, we reduced operational costs by 35%. The VisionDelTurco team works extremely professionally and solution-oriented.',
          name: 'Maria Ivanova',
          role: 'COO',
          company: 'GlobalBiz RU',
          rating: 5,
        },
        {
          quote:
            'Our web and mobile app exceeded all expectations. They delivered on time and provided proactive support. We highly recommend them.',
          name: 'James Wilson',
          role: 'Founder',
          company: 'DigitalFirst',
          rating: 5,
        },
      ],
    },
    faq: {
      badge: '05 — FAQ',
      title1: 'Your',
      title2: 'Questions',
      items: [
        {
          q: 'Which industries do you serve?',
          a: 'We provide AI solutions in e-commerce, fintech, healthcare, education, tourism, logistics and many other industries. We work with industry-specific expertise and approach.',
        },
        {
          q: 'How long does a project take?',
          a: 'Depending on the scope, most projects are completed in 1-4 weeks. Chatbot and automation projects take 1-2 weeks, while web/mobile projects can take up to 8 weeks.',
        },
        {
          q: 'How is pricing structured?',
          a: 'We provide customized quotes based on your project needs. In a free initial consultation, we define the scope and prepare a transparent proposal.',
        },
        {
          q: 'Do you provide post-project support?',
          a: 'Yes, all our projects include 3 months of free support and maintenance. Long-term maintenance and development packages are also available.',
        },
        {
          q: 'Is integration with existing systems possible?',
          a: 'Absolutely. We provide seamless integration with your existing CRM, ERP, e-commerce platforms, payment systems and other software.',
        },
        {
          q: 'How do we communicate during the project?',
          a: 'We maintain transparent communication through regular weekly meetings, project management tools (Jira, Notion) and instant messaging channels.',
        },
      ],
    },
    cta: {
      badge: 'Free Consultation',
      title1: "Let's Bring Your Project to Life",
      title2: '',
      subtitle: 'Get a free consultation today.',
      btn1: 'Get Started →',
      btn2: 'View Portfolio',
    },
    footer: {
      desc: 'Shaping the future of your business with AI.',
      col1: 'Services',
      col1Links: ['AI Chatbot', 'Business Automation', 'Web Development', 'Content Creation'],
      col2: 'Company',
      col2Links: ['About Us', 'Portfolio'],
      col3: 'Contact',
      email: 'visiondelturco@gmail.com',

      rights: 'All rights reserved.',
    },
  },

  ru: {
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      benefits: 'Преимущества',
      testimonials: 'Отзывы',
      faq: 'FAQ',
      cta: 'Начать',
    },
    hero: {
      badge: 'ИИ-Агентство',
      title1: 'Трансформируйте',
      title2: 'Ваш Бизнес',
      title3: 'с ИИ',
      subtitle:
        'Мы переводим ваш бизнес в цифровую эпоху с помощью чат-ботов, автоматизации, веб и мобильных приложений. Опередите конкурентов.',
      cta1: 'Начать',
      cta2: 'Узнать больше',
      stat1: { value: '30+', label: 'Завершённых проектов' },
      stat2: { value: '98%', label: 'Удовлетворённость клиентов' },
      stat3: { value: '24/7', label: 'Поддержка' },
      floatChat1: 'Привет! Чем я могу вам помочь? 🤖',
      floatChat2: 'Хочу узнать о ваших продуктах.',
      floatChat3: 'Конечно! Какой продукт вас интересует?',
      floatPlaceholder: 'Введите сообщение...',
      floatLabel: 'VisionBot',
      floatMetricLabel: 'Активных пользователей',
      floatMetricValue: '2 847',
      floatMetricTrend: '↑ +18% на этой неделе',
      floatAutoLabel: 'Уровень автоматизации',
      floatAutoValue: '98.5%',
    },
    services: {
      badge: '01 — Наши услуги',
      title1: 'Решения на',
      title2: 'основе ИИ',
      subtitle:
        'Мы предоставляем индивидуальные решения искусственного интеллекта для вашего бизнеса. Каждая услуга разработана для ускорения вашего роста.',
      items: [
        {
          title: 'ИИ Чат-бот',
          desc: 'Общается с клиентами за вас, пока вы отдыхаете',
          badges: ['24/7 Активен', 'ИИ', 'CRM'],
        },
        {
          title: 'Автоматизация',
          desc: 'Рутинные задачи теперь работают сами',
          badges: ['Автоматизация', 'Процессы', 'Интеграция'],
        },
        {
          title: 'Веб-разработка',
          desc: 'Сайты, превращающие посетителей в клиентов',
          badges: ['Быстрый', 'SEO', 'Адаптивный'],
        },
        {
          title: 'Создание контента',
          desc: 'Креативный контент, который выделяет ваш бренд',
          badges: ['ИИ', 'Видео', 'Соцсети'],
        },
      ],
    },
    process: {
      badge: '02 — Как это работает',
      title1: 'Простой и эффективный',
      title2: 'Процесс',
      subtitle: 'Мы воплощаем ваш проект в жизнь за 4 шага. Прозрачно, быстро и ориентированно на результат.',
      steps: [
        {
          num: '01',
          title: 'Исследование и анализ',
          desc: 'Мы тщательно анализируем потребности вашего бизнеса, проводим конкурентный анализ и создаём индивидуальную стратегию.',
        },
        {
          num: '02',
          title: 'Дизайн и планирование',
          desc: 'Разрабатываем современный дизайн с упором на пользовательский опыт и определяем дорожную карту проекта.',
        },
        {
          num: '03',
          title: 'Разработка',
          desc: 'Создаём быстрые, безопасные и масштабируемые решения с новейшими технологиями. Предоставляем регулярные отчёты.',
        },
        {
          num: '04',
          title: 'Запуск и поддержка',
          desc: 'Запускаем ваш проект и оказываем постоянную поддержку. Отслеживаем ваш успех совместно.',
        },
      ],
    },
    benefits: {
      badge: '03 — Почему мы',
      title1: 'Выберите',
      title2: 'VisionDelTurco',
      subtitle: 'Преимущества, которые удерживают вас впереди конкурентов. Мы стремимся к совершенству в каждом проекте.',
      items: [
        {
          icon: '🚀',
          title: 'Быстрая доставка',
          desc: 'Сдаём проекты в срок без ущерба для качества.',
        },
        {
          icon: '🔒',
          title: 'Безопасные решения',
          desc: 'Разрабатываем системы с высочайшими стандартами безопасности.',
        },
        {
          icon: '📊',
          title: 'На основе данных',
          desc: 'Аналитические инструменты для принятия решений на основе реальных данных.',
        },
        {
          title: 'Эффективные результаты',
          desc: 'Мы обеспечиваем измеримые результаты и устойчивый рост в каждом проекте.',
        },
        {
          title: 'Инновационный подход',
          desc: 'Интегрируем новейшие технологии ИИ в ваш бизнес.',
        },
        {
          title: 'Постоянная поддержка',
          desc: 'Мы остаёмся рядом даже после завершения проекта, поддерживая каждый шаг.',
        },
      ],
    },
    testimonials: {
      badge: '04 — Отзывы',
      title1: 'Что говорят',
      title2: 'клиенты',
      items: [
        {
          quote:
            'Решение с ИИ-чат-ботом от VisionDelTurco полностью изменило наше обслуживание клиентов. Уровень удовлетворённости вырос на 40%, а команда сосредоточилась на стратегических задачах.',
          name: 'Ахмет Йылмаз',
          role: 'CEO',
          company: 'TechStart TR',
          rating: 5,
        },
        {
          quote:
            'Благодаря системам автоматизации мы снизили операционные расходы на 35%. Команда VisionDelTurco работает профессионально и ориентирована на результат.',
          name: 'Мария Иванова',
          role: 'COO',
          company: 'GlobalBiz RU',
          rating: 5,
        },
        {
          quote:
            'Наши веб и мобильные приложения превзошли все ожидания. Сдали вовремя и обеспечили проактивную поддержку. Горячо рекомендуем.',
          name: 'Джеймс Уилсон',
          role: 'Founder',
          company: 'DigitalFirst',
          rating: 5,
        },
      ],
    },
    faq: {
      badge: '05 — Часто задаваемые вопросы',
      title1: 'Ваши',
      title2: 'вопросы',
      items: [
        {
          q: 'В каких отраслях вы работаете?',
          a: 'Мы предоставляем решения ИИ в сфере электронной коммерции, финтеха, здравоохранения, образования, туризма, логистики и многих других отраслях.',
        },
        {
          q: 'Сколько времени занимает проект?',
          a: 'В зависимости от объёма, большинство проектов завершается за 1-4 недели. Чат-боты и автоматизация — 1-2 недели, веб/мобильные проекты — до 8 недель.',
        },
        {
          q: 'Как формируется стоимость?',
          a: 'Мы предоставляем индивидуальные коммерческие предложения. На бесплатной первоначальной консультации определяем объём и готовим прозрачное предложение.',
        },
        {
          q: 'Вы обеспечиваете поддержку после проекта?',
          a: 'Да, все наши проекты включают 3 месяца бесплатной поддержки. Также доступны долгосрочные пакеты обслуживания.',
        },
        {
          q: 'Возможна ли интеграция с существующими системами?',
          a: 'Абсолютно. Мы обеспечиваем бесшовную интеграцию с вашими CRM, ERP, платформами электронной коммерции и другими системами.',
        },
        {
          q: 'Как мы общаемся в ходе проекта?',
          a: 'Поддерживаем прозрачную коммуникацию через еженедельные встречи, инструменты управления проектами (Jira, Notion) и мессенджеры.',
        },
      ],
    },
    cta: {
      badge: 'Бесплатная консультация',
      title1: 'Воплотим ваш проект в жизнь',
      title2: '',
      subtitle: 'Получите бесплатную консультацию сегодня.',
      btn1: 'Начать →',
      btn2: 'Посмотреть портфолио',
    },
    footer: {
      desc: 'Переводим ваш бизнес в будущее с помощью ИИ.',
      col1: 'Услуги',
      col1Links: ['AI Чатбот', 'Бизнес-автоматизация', 'Веб-разработка', 'Создание контента'],
      col2: 'Компания',
      col2Links: ['О нас', 'Портфолио'],
      col3: 'Контакты',
      email: 'visiondelturco@gmail.com',

      rights: 'Все права защищены.',
    },
  },
} as const;
