"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github, Target, Zap, Brain, BarChart3, Database, Code, Wrench } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = ["Full Stack Engineer", "Founding Engineer", "Data Engineer"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      // Typing
      if (typedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1))
        }, 100)
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deleting
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
      } else {
        // Move to next title
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentTitleIndex, titles])

  return (
    <div className="min-h-screen bg-background">
      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 7%, 14%, 21%, 28%, 35%, 42%, 49%, 56%, 63%, 70%, 77%, 84%, 91%, 98%, 100% { transform: rotate(0deg); }
          3.5% { transform: rotate(2deg); }
          10.5%, 24.5% { transform: rotate(-2deg); }
          17.5% { transform: rotate(2deg); }
          31.5% { transform: rotate(-2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(146, 64, 14, 0.3); }
          50% { box-shadow: 0 0 40px rgba(146, 64, 14, 0.6); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(5deg); }
          70% { transform: scale(0.9) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .wiggle { animation: wiggle 2s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .bounce-in { animation: bounce-in 0.8s ease-out; }
        .typewriter::after {
          content: '|';
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-2 h-2 bg-primary/20 rounded-full float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-accent/20 rounded-full float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="relative inline-block">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6 mx-auto bounce-in"
                style={{
                  background: "linear-gradient(135deg, #451a03 0%, #292524 50%, #1c1917 100%)",
                  boxShadow:
                    "0 0 30px rgba(146, 64, 14, 0.8), 0 0 60px rgba(146, 64, 14, 0.4), 0 0 90px rgba(146, 64, 14, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  border: "2px solid rgba(146, 64, 14, 0.6)",
                }}
              >
                DS
              </div>
            </div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Deepthi Sathyanarayanan
            </h1>

            <h2
              className={`text-2xl md:text-3xl font-semibold mb-4 text-primary transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="typewriter">{typedText}</span>
            </h2>

            <p
              className={`text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              5 years of experience building scalable web applications and AI-powered tools. Passionate about delivering
              end-to-end features with an entrepreneurial mindset and integrating AI/ML for personalized experiences.
            </p>

            <div
              className={`flex flex-wrap gap-4 justify-center mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button size="lg" className="gap-2 hover:scale-105 hover:wiggle transition-all duration-200" asChild>
                <a href="mailto:deepssathyan0613@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:scale-105 hover:wiggle transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                View Projects
              </Button>
            </div>

            <div
              className={`flex gap-4 justify-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:rotate-12 hover:wiggle transition-all duration-200"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:rotate-12 hover:wiggle transition-all duration-200"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:rotate-12 hover:wiggle transition-all duration-200"
                asChild
              >
                <a href="mailto:deepssathyan0613@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div
              className={`mt-6 text-muted-foreground transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p>Atlanta, GA • (562) 686-0541</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Technical Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 wiggle">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white/50">
              <img
                src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
                alt="React logo spinning"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-center text-gray-800">React & Next.js</h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 wiggle">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white/50">
              <img
                src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
                alt="Python logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-center text-gray-800">Python & ML</h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 wiggle">
            <Database className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold text-center text-gray-800">PostgreSQL & AWS</h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 wiggle">
            <Code className="w-16 h-16 mx-auto mb-4 text-orange-600" />
            <h3 className="font-semibold text-center text-gray-800">TypeScript & Rust</h3>
          </div>
        </div>

        {/* AI/ML Expertise */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-8 py-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/50">
              <img
                src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"
                alt="AI Brain Animation"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-primary">AI/ML Integration Specialist</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building production-ready AI features, from real-time inference pipelines to LLM-powered
            analytics, with experience in TensorFlow, PyTorch, and model optimization for scalable applications.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects & Innovations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Demonstrating technical capabilities through specific project outcomes while showcasing diversity of
              skills from ML to full-stack development
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant="default"
                className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                ALL PROJECTS
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              >
                MACHINE LEARNING
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              >
                FULL-STACK
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              >
                DATA SCIENCE
              </Button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1: Predictive Modeling */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="relative h-48 bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"
                    alt="Neural Network Animation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  <Brain className="w-24 h-24 text-white absolute animate-pulse" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    2025
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Predictive Modeling for Age Estimation
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Built a deep learning model to predict age from images, achieving higher accuracy and efficient
                  training. Scaled ResNet-18 architecture with Bayesian hyperparameter tuning, reducing Mean Absolute
                  Error by 20%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spark
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2: User Behavior Analytics */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="relative h-48 bg-gradient-to-br from-accent/80 to-primary/60 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
                    alt="Analytics Dashboard Animation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
                  <BarChart3 className="w-24 h-24 text-white absolute animate-pulse" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    2024
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  User Behavior Analytics & Recommendation System
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Developed a recommendation system analyzing user behavior on 10,000+ music tracks. Integrated Spotify
                  API with OAuth2, cutting data latency by 60% with automated pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Pandas
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spotify API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    OAuth2
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3: Bias Detection */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="relative h-48 bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
                    alt="Data Processing Animation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  <Database className="w-24 h-24 text-white absolute animate-pulse" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    2024
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Bias Detection in Academic Retention Models
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Analyzed retention data to detect and mitigate bias in predictive models. Applied SMOTE resampling on
                  50k+ records, improving fairness in predictions by 12%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spark
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Scikit-learn
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Power BI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Lead Data and Systems Engineer</CardTitle>
                    <CardDescription className="text-lg">PROJXON • Remote, USA</CardDescription>
                  </div>
                  <Badge variant="secondary">July 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built low-latency SaaS dashboards and APIs using TypeScript, Next.js, and PostgreSQL, scaling
                  real-time analytics across 5 business units with &lt;200ms response time. Deploy frontend features via
                  Vercel, integrating with backend ML/AI pipelines for personalized insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">AWS RDS</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Graduate Research Assistant</CardTitle>
                    <CardDescription className="text-lg">California State University Long Beach</CardDescription>
                  </div>
                  <Badge variant="secondary">Aug 2023 - Apr 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Led 1:1 mentoring and group workshops for 10+ students on Python, Spark, SQL, and AI/ML pipelines,
                  emphasizing real-world applied modeling. Built Spark-based retention forecasting pipelines for 50k+
                  student records, reducing compute time by 30% and supporting reproducible research. Published and
                  presented findings in peer-reviewed academic contexts; designed dashboards to translate model outputs
                  for non-technical stakeholders.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Spark</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription className="text-lg">Robert Bosch • Coimbatore, India</CardDescription>
                  </div>
                  <Badge variant="secondary">Jul 2022 - May 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed real-time HMI features for automotive systems, reducing downtime by 20%. Built Tableau
                  dashboards for production health monitoring. I designed and implemented real-time Human-Machine
                  Interface (HMI) features for rear-view camera systems, integrating backend sensor data with embedded
                  UI displays to improve driver feedback and system reliability. I reengineered startup and recovery
                  logic for embedded HMI systems, reducing black-screen and downtime events by 20% during reverse
                  engagement scenarios. I also integrated real-time system metrics into dashboards using SQL, Tableau,
                  and PostgreSQL, built Tableau dashboards to monitor production health, and collaborated with
                  cross-functional Agile teams across 15+ sprints to accelerate feature shipping by 20%. I mentored five
                  engineers on full-stack development, AI feature integration, secure SaaS deployment, and Agile/Kanban
                  workflows, and optimized audio source scenes and HMI interface layers using CGI Studio, improving
                  usability and reducing system response time by 15%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Embedded Systems</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">Tableau</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Associate Data and Software Engineer</CardTitle>
                    <CardDescription className="text-lg">
                      J.S Enterprising and Exporter • Coimbatore, India
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Jan 2021 - Apr 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I automated ingestion pipelines using Python, reducing manual aggregation time by 50% and enabling
                  near real-time analytics. I provided solutions for field claims and customer issues within SLA
                  windows, improving user satisfaction and product quality, and applied statistical analysis to
                  historical production data to identify bottlenecks, driving process improvements that increased
                  workflow efficiency by 10–12%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Data Pipelines</Badge>
                  <Badge variant="outline">Statistical Analysis</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Master of Science in Information Systems</CardTitle>
                    <CardDescription className="text-lg">
                      California State University Long Beach • Major in Data Science
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">May 2025</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Bachelor of Engineering, Computer Science</CardTitle>
                    <CardDescription className="text-lg">Anna University • Minor in Statistics</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2022</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-20 float hidden md:block">
          <img
            src="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"
            alt="Celebration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Three key differentiators that set my full stack engineering expertise apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl hover:scale-105 hover:wiggle transition-all duration-300 border-2 border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <Zap className="w-10 h-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-xl mb-4">Rapid Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I consistently deliver production-ready applications 40% faster than industry standards through
                  optimized workflows and proven frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:scale-105 hover:wiggle transition-all duration-300 border-2 border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <Target className="w-10 h-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-xl mb-4">End-to-End Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  From database architecture to user interface design, I handle every layer of your application with
                  deep technical proficiency across the entire stack.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:scale-105 hover:wiggle transition-all duration-300 border-2 border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <Wrench className="w-10 h-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-xl mb-4">Future-Proof Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  My code is built for scalability and maintainability, with clean architecture patterns that adapt
                  seamlessly as your business grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            Ready to Build Something Amazing Together?
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-pretty">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, or share insights about
            full-stack development and AI integration.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20 pulse-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground mb-6">deepssathyan0613@gmail.com</p>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={() => (window.location.href = "mailto:deepssathyan0613@gmail.com")}
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20 pulse-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Phone</h3>
                <p className="text-muted-foreground mb-6">(562) 686-0541</p>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={() => (window.location.href = "tel:+15626860541")}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20 pulse-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">LinkedIn</h3>
                <p className="text-muted-foreground mb-6">Professional Network</p>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={() => window.open("https://linkedin.com/in/deepthi-sathyanarayanan", "_blank")}
                >
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground">
            Based in Atlanta, GA - Open to remote opportunities, and relocate without assistance!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Deepthi Sathyanarayanan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
