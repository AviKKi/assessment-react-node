const experience = [
  {
    id: 1,
    dateFrom: 'Jan 2018',
    dateTo: 'Dec 2018',
    company: 'Fashionalia',
    role: 'Web Scraping Consultant',
    description:
      'I was responsible for creating webscraping pipeline for 100+ websites. I abstracted all the common requirements of a web scraper into a base class, and derived one class for each website. Scrapers needed to be efficient, so I spend a lot of time reverse-engineering APIs and JS code.'
  },
  {
    id: 2,
    dateFrom: 'April 2019',
    dateTo: 'June 2019',
    company: 'Effcon Technologies Ltd.',
    role: 'Teaching Intern',
    description:
      'I was responsible for teaching 3 batched of 60+ students each, I taught Django and Machine Learning there; and took an extra workshop on GIT.'
  },
  {
    id: 3,
    dateFrom: 'Aug 2019',
    dateTo: 'June 2020',
    company: 'Metalclock.in',
    role: 'Co-founder/CTO',
    description:
      'In metalclock we focused on increasing the production at mediam and small scale industries, I was responsible for leading the tech team. I created a React-Native app, a React JS dashboard, designed databased and created REST APIs with Django Rest framework. '
  },
  {
    id: 4,
    dateFrom: 'Dec 2020',
    dateTo: 'March 2021',
    company: 'Rüdiger Wöhrl GmbH',
    role: 'Software Developer',
    description: `My work here involved Deep learning, Low level programing. I converted a Python device manager to GoLang, it involved socket programming and interfacing with C libraries, creating basic UI with fyne.io. 
      I also created a device manager in C++17 it involved a license plate recognition software using Tensorflow and OpenCV I was provided with pre-trained models and Python code for reference; the C++ version after all optimizations was 2 times faster than python; it had an async socket server that used BOOST’s asio library, and UI using wxWidget. `
  },
  {
    id: 5,
    dateFrom: 'July 2020',
    dateTo: 'Present',
    company: 'BrightBrains',
    role: 'Full-Stack Developer',
    description: `I optimized the PageSpeed insights score from 30 to 80, It included coding an lottie animation in CSS, optimizing images, codes etc. Created several features in the Django backend, did SEO optimizations.`
  },
  {
    id: 6,
    dateFrom: 'Jan 2018',
    dateTo: 'Mar 2018',
    company: 'Instafinder',
    role: 'Developed a SaaS',
    description: `Instafinder is a SaaS platform I built as Freelance Project, it allowed users to get list of emails based on hashtag they provided, our software crawled instagram for all the post with given hashtag, parsed the bio of users posting it and extracted their emails if they had it mentioned. Credits were deducted from user’s account according to the emails they crawled. It was a Django Backend with celery for handling crawling queues. Eventually the project got shut due to concerns of GDPR comming in near future.`
  }
]

module.exports = experience
