import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Desktop = (): JSX.Element => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Such an amazing traniner and easily understand the entire syllabus, and the guidence will be super and good to the way of explaning.",
      position: "top-[1223px] left-[929px]",
    },
    {
      id: 2,
      text: "Such an amazing traniner and easily understand the entire syllabus, and the guidence will be super and good to the way of explaning.",
      position: "top-[1274px] left-[434px]",
    },
    {
      id: 3,
      text: "Such an amazing traniner and easily understand the entire syllabus, and the guidence will be super and good to the way of explaning.",
      position: "top-[1272px] left-[1446px]",
    },
  ];

  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "Motion Graphics: Create a Nice Typography Animation",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-1.png",
      students: "1,957 Students",
      duration: "01h 59m",
      price: "Rs.499",
    },
    {
      id: 2,
      title: "Advance PHP knowledge with JS to make smart web",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-3.png",
      students: "9,575 Students",
      duration: "01h 59m",
      price: "Rs.499",
    },
    {
      id: 3,
      title: "Education Software and PHP and JS System Script",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-4.png",
      students: "2957 Students",
      duration: "02h 49m",
      price: "Rs.499",
    },
    {
      id: 4,
      title: "The Complete Financial Analyst Training & Investing",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-6.png",
      students: "5,457 Students",
      duration: "01h 49m",
      price: "Rs.499",
    },
    {
      id: 5,
      title: "Marketing 2023: Complete Guide To Instagram Growth",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-2.png",
      students: "595 Students",
      duration: "01h 49m",
      price: "Rs.499",
    },
    {
      id: 6,
      title: "Learn 3D Modelling and Design for Beginners",
      image: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group-5.png",
      students: "458 Students",
      duration: "03h 00m",
      price: "Rs.499",
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      title: "Digital Marketing",
      courses: "25 Courses",
      color: "bg-[#df385b]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-4.svg",
    },
    {
      id: 2,
      title: "Web Development",
      courses: "16 Courses",
      color: "bg-[#5ab48e]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-7.svg",
    },
    {
      id: 3,
      title: "Art & Humanities",
      courses: "76 Courses",
      color: "bg-[#7e56d8]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-8.svg",
    },
    {
      id: 4,
      title: "Personal Development",
      courses: "22 Courses",
      color: "bg-[#fab437]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-12.svg",
    },
    {
      id: 5,
      title: "IT and Software",
      courses: "110 Courses",
      color: "bg-[#2aaa94]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-2.svg",
    },
    {
      id: 6,
      title: "Graphic Design",
      courses: "85 Courses",
      color: "bg-[#2cd181]",
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-1.svg",
    },
  ];

  // Footer links data
  const footerLinks = {
    quickLinks: [
      { title: "Home", href: "#" },
      { title: "Professional Education", href: "#" },
      { title: "Courses", href: "#" },
      { title: "Admissions", href: "#" },
      { title: "Testimonial", href: "#" },
      { title: "Programs", href: "#" },
    ],
    community: [
      { title: "Learners", href: "#" },
      { title: "Parteners", href: "#" },
      { title: "Developers", href: "#" },
      { title: "Transactions", href: "#" },
      { title: "Blog", href: "#" },
    ],
    classes: [
      { title: "Classroom courses", href: "#" },
      { title: "Virtual classroom courses", href: "#" },
      { title: "E-learning courses", href: "#" },
      { title: "Video Courses", href: "#" },
      { title: "Offline Courses", href: "#" },
    ],
    more: [
      { title: "Press", href: "#" },
      { title: "Investors", href: "#" },
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Help", href: "#" },
      { title: "Contact", href: "#" },
    ],
  };

  // Social media icons
  const socialMedia = [
    {
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/instagram.png",
      alt: "Instagram",
    },
    {
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/whatsapp.png",
      alt: "WhatsApp",
    },
    {
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/twitter.png",
      alt: "Twitter",
    },
    {
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/linkedin.png",
      alt: "LinkedIn",
    },
    {
      icon: "https://c.animaapp.com/mbqnlw9rI3QsZP/img/youtube.png",
      alt: "YouTube",
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:2"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header and Hero Section */}
        <header className="relative">
          <div className="w-full h-[119px] bg-white flex items-center justify-between px-12">
            <img
              className="w-[191px] h-[110px] object-cover"
              alt="Askmeidentity"
              src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/askmeidentity-2.png"
            />

            <nav className="flex items-center space-x-8">
              <a
                href="#"
                className="[font-family:'Righteous',Helvetica] font-normal text-black text-xl"
              >
                Home
              </a>
              <a
                href="#"
                className="[font-family:'Righteous',Helvetica] font-normal text-black text-xl"
              >
                About
              </a>
              <a
                href="#"
                className="[font-family:'Righteous',Helvetica] font-normal text-black text-xl"
              >
                Courses
              </a>
              <a
                href="#"
                className="[font-family:'Righteous',Helvetica] font-normal text-black text-xl"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    className="w-6 h-[25px]"
                    alt="Icon"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-9.svg"
                  />
                  <div className="absolute w-5 h-5 top-0 left-3.5 bg-[#2aaa94] rounded-[20px] flex items-center justify-center">
                    <div className="[font-family:'Righteous',Helvetica] font-normal text-white text-[10px] text-center">
                      0
                    </div>
                  </div>
                </div>
                <img
                  className="w-6 h-[25px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-10.svg"
                />
                <img
                  className="w-[25px] h-[25px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-5.svg"
                />
              </div>
              <a
                href="#"
                className="[font-family:'Saira',Helvetica] font-medium text-[#4a4a4a] text-xl underline"
              >
                Login
              </a>
              <Button className="w-[138px] h-[60px] rounded-[10px] [background:linear-gradient(137deg,rgba(8,63,155,1)_0%,rgba(127,86,217,1)_100%)] [font-family:'Saira',Helvetica] font-medium text-white text-xl">
                Signup
              </Button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative w-full min-h-[100vh] lg:h-[936px]">
            {/* Background Image */}
            <img
              className="absolute w-full h-full object-cover"
              alt="Background"
              src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/1524-background-1.png"
            />

            {/* Gradient Overlay */}
            <div className="absolute w-full h-full [background:linear-gradient(225deg,rgba(4,1,108,0.8)_0%,rgba(74,22,189,0.8)_100%)]"></div>

            {/* Decorative blur element */}
            <div className="absolute w-[200px] h-[200px] md:w-[314px] md:h-[314px] top-[20%] left-0 bg-[#81c7a24c] rounded-[50%] blur-[60px]"></div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[100vh] md:h-[936px]">
              {/* Left Content */}
              <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-8">
                {/* Tagline */}
                <div className="[font-family:'Righteous',Helvetica] font-normal text-[#ffffffcc] text-sm sm:text-base lg:text-lg tracking-[2.00px] lg:tracking-[3.00px] mb-6 lg:mb-8">
                  SUCCESSFUL COACHES ARE VISIONARIES
                </div>

                {/* Main Heading */}
                <h1 className="[font-family:'Righteous',Helvetica] font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[90px] mb-8 lg:mb-12">
                  <span className="text-white">Good </span>
                  <span className="text-[#0d37cd]">coaching </span>
                  <span className="text-white">
                    is good teaching & nothing else.
                  </span>
                </h1>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center md:justify-start mb-8 lg:mb-12">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 lg:px-8 h-[50px] lg:h-[60px] rounded-[10px] border-2 border-white text-white hover:bg-white hover:text-black [font-family:'Righteous',Helvetica] font-normal text-base lg:text-lg tracking-[1.00px] bg-transparent"
                  >
                    View Courses
                  </Button>
                  <Button
                    variant="link"
                    className="text-white hover:text-[#0d37cd] [font-family:'Righteous',Helvetica] font-normal text-base lg:text-lg p-0"
                  >
                    Get Free Consultation
                  </Button>
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-[489px] mx-auto md:mx-0">
                  <div className="h-[60px] lg:h-[70px] bg-white rounded-[7px] flex items-center px-4 lg:px-6">
                    <Input
                      placeholder="What do you want to learn today?"
                      className="flex-1 border-0 bg-transparent [font-family:'Righteous',Helvetica] font-normal text-[#4f547b] text-sm lg:text-base focus-visible:ring-0"
                    />
                    <Button className="ml-2 w-[120px] lg:w-[142px] h-[40px] lg:h-[50px] rounded-[10px] [background:linear-gradient(132deg,rgba(48,35,178,1)_0%,rgba(127,86,217,1)_100%)] flex items-center justify-center">
                      <img
                        className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                        alt="Search Icon"
                        src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-11.svg"
                      />
                      <span className="[font-family:'Righteous',Helvetica] font-normal text-white text-sm lg:text-[15px]">
                        Search
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Content - Model Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <div className="relative w-full max-w-[500px] md:max-w-[600px] h-[400px] sm:h-[500px] md:h-[700px]">
                  {/* Decorative background blur */}
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full blur-[100px]"></div>

                  {/* Model Image */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center">
                    <img
                      className="w-full h-full object-contain object-bottom"
                      alt="Professional Coach Model"
                      src="/images/model-image.png"
                    />
                  </div>

                  {/* Floating testimonial card */}
                  <div className="absolute top-8 left-4 md:top-12 md:left-8 z-20 max-w-[250px] md:max-w-[280px]">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 lg:p-6 shadow-lg">
                      <div className="flex items-center mb-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover mr-3"
                          alt="Shyam"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        />
                        <div>
                          <div className="[font-family:'Rowdies',Helvetica] font-normal text-[#0d37cd] text-sm md:text-base leading-tight">
                            Shyam
                          </div>
                          <div className="flex items-center">
                            <div className="[font-family:'Inter',Helvetica] font-bold text-[#0093e6] text-xs mr-2">
                              4.9
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                  key={star}
                                  className="w-3 h-3 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="[font-family:'Righteous',Helvetica] font-normal text-[#4f547b] text-xs lg:text-sm leading-relaxed">
                        "In a coaching role, you ask the questions and rely more
                        on your staff, who become the experts."
                      </p>
                    </div>
                  </div>

                  {/* Floating stats card */}
                  <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 lg:p-6 shadow-lg">
                      <div className="text-center">
                        <div className="[font-family:'Rowdies',Helvetica] font-bold text-[#0d37cd] text-2xl lg:text-3xl mb-1">
                          10K+
                        </div>
                        <div className="[font-family:'Righteous',Helvetica] font-normal text-[#4f547b] text-xs lg:text-sm">
                          Happy Students
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Brand Section */}
            <div className="absolute bottom-0 w-full">
              <div className="relative w-full h-[120px] sm:h-[140px] lg:h-[167px]">
                <img
                  className="w-full h-full object-cover"
                  alt="Brand background"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/mask-group.png"
                />
                <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgba(46,8,199,1)_0%,rgba(126,8,199,0)_100%)]"></div>

                {/* Brand Logos */}
                <div className="absolute w-full h-full flex flex-wrap justify-center lg:justify-around items-center px-4 gap-4 lg:gap-0">
                  <img
                    className="w-[80px] h-[24px] sm:w-[100px] sm:h-[30px] lg:w-[140px] lg:h-[42px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand6-png-1.png"
                  />
                  <img
                    className="w-[70px] h-[22px] sm:w-[85px] sm:h-[26px] lg:w-[120px] lg:h-[37px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand1-png.png"
                  />
                  <img
                    className="w-[80px] h-[24px] sm:w-[100px] sm:h-[30px] lg:w-[140px] lg:h-[42px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand6-png.png"
                  />
                  <img
                    className="w-[70px] h-[40px] sm:w-[85px] sm:h-[48px] lg:w-[120px] lg:h-[68px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand3-png.png"
                  />
                  <img
                    className="w-[70px] h-[22px] sm:w-[85px] sm:h-[26px] lg:w-[120px] lg:h-[37px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand5-png.png"
                  />
                  <img
                    className="w-[70px] h-[22px] sm:w-[85px] sm:h-[26px] lg:w-[120px] lg:h-[37px] object-contain"
                    alt="Brand logo"
                    src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/link---brand1-png-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Courses Section */}
        <section className="relative w-full pt-[117px] pb-[100px] [background:linear-gradient(180deg,rgba(217,236,255,1)_0%,rgba(240,243,255,0)_100%)] -rotate-180">
          <div className="rotate-180">
            <div className="text-center mb-16">
              <h2 className="[font-family:'Rowdies',Helvetica] font-normal text-[45px] mb-2">
                <span className="text-[#323232] tracking-[-0.61px]">
                  Featured{" "}
                </span>
                <span className="text-[#4883ff] tracking-[-0.61px]">
                  Course
                </span>
              </h2>
              <p className="[font-family:'Righteous',Helvetica] font-normal text-[#000000cc] text-[25px] tracking-[3.00px]">
                THE FEATURE COURSES ARE WE INVENTED OUR TEACHING PART
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1320px] mx-auto px-4">
              {featuredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="w-full shadow-[0px_4px_4px_#d8ebff80] rounded-[20px] overflow-hidden"
                >
                  <img
                    className="w-full h-[314px] object-cover"
                    alt={course.title}
                    src={course.image}
                  />
                  <CardContent className="p-8">
                    <div className="flex justify-between mb-6 [font-family:'Saira',Helvetica] font-medium text-[#4e596b] text-sm tracking-[-0.42px] leading-[35px]">
                      <span>{course.students}</span>
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="[font-family:'Saira',Helvetica] font-semibold text-[#314360] text-[25px] tracking-[-0.75px] leading-[35px] mb-6">
                      {course.title}
                    </h3>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center px-8 pb-4">
                    <span className="[font-family:'Saira',Helvetica] font-semibold text-[#4e596b] text-[22px] tracking-[-0.66px] leading-[35px]">
                      {course.price}
                    </span>
                    <img
                      className="w-[26px] h-[26px]"
                      alt="Cart icon"
                      src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/9054263-bx-cart-alt-icon-1.svg"
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Button className="w-[200px] h-[60px] rounded-[10px] [background:linear-gradient(136deg,rgba(8,63,155,1)_0%,rgba(127,86,217,1)_100%)] [font-family:'Righteous',Helvetica] font-normal text-white text-xl">
                Explore courses
              </Button>
            </div>
          </div>
        </section>

        {/* Why Learn With Us Section */}
        <section className="relative w-full py-20 bg-[#21b573]">
          <div className="absolute w-full h-full top-0 left-0">
            <img
              className="w-full h-full object-cover"
              alt="Background"
              src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/1524-background-1.png"
            />
            <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(25deg,rgba(115,159,232,0.9)_0%,rgba(79,24,202,0.9)_100%)]"></div>
          </div>

          <div className="relative z-10 max-w-[1320px] mx-auto px-4 text-center">
            <h2 className="[font-family:'Righteous',Helvetica] font-normal text-[45px] leading-[50px] mb-6">
              <span className="text-white">Why </span>
              <span className="text-[#0d37cd]">learn</span>
              <span className="text-white"> with our courses?</span>
            </h2>

            <p className="[font-family:'Saira',Helvetica] font-normal text-white text-[25px] leading-[35px] mb-16 max-w-3xl mx-auto">
              We are providing the best courses and top classes.And extradinary
              placement training.....
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img
                  className="w-20 h-20 mb-12"
                  alt="Icon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon.svg"
                />
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-white text-[25px] leading-[32.6px] mb-6">
                  01. Learn
                </h3>
                <p className="[font-family:'Righteous',Helvetica] font-normal text-white text-lg leading-[27px]">
                  Learn continually. There is always
                  <br />
                  "one more thing" to learn.
                </p>
              </div>

              <div className="flex flex-col items-center relative">
                <Separator
                  orientation="vertical"
                  className="absolute h-[241px] -left-4 hidden md:block"
                />
                <img
                  className="w-20 h-20 mb-12"
                  alt="Icon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-6.svg"
                />
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-white text-[25px] leading-[32.6px] mb-6">
                  02. Graduate
                </h3>
                <p className="[font-family:'Righteous',Helvetica] font-normal text-white text-lg leading-[27px]">
                  Be bold, be courageous,
                  <br />
                  be your best.
                </p>
              </div>

              <div className="flex flex-col items-center relative">
                <Separator
                  orientation="vertical"
                  className="absolute h-[241px] -left-4 hidden md:block"
                />
                <img
                  className="w-20 h-20 mb-12"
                  alt="Icon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/icon-3.svg"
                />
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-white text-[25px] leading-[32.6px] mb-6">
                  03. Work
                </h3>
                <p className="[font-family:'Righteous',Helvetica] font-normal text-white text-lg leading-[27px]">
                  Great companies are built in
                  <br />
                  the office, with hard work put
                  <br />
                  in by team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories Section */}
        <section className="relative w-full py-20 [background:linear-gradient(180deg,rgba(217,236,255,1)_0%,rgba(217,236,255,0)_100%)] -rotate-180">
          <div className="rotate-180 max-w-[1320px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="[font-family:'Righteous',Helvetica] font-normal text-[45px] text-center mb-4">
                <span className="text-[#323232]">Top </span>
                <span className="text-[#0d37cd]">Categories</span>
              </h2>
              <p className="[font-family:'Righteous',Helvetica] font-normal text-[#4e596b] text-[25px] text-center">
                100+ unique online course list designs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="flex flex-col items-center p-6 rounded-[20px] shadow-[0px_4px_4px_#d8ebff80]"
                >
                  <div
                    className={`${category.color} w-[90px] h-[90px] rounded-lg flex items-center justify-center mb-6`}
                  >
                    <img
                      className="w-10 h-10"
                      alt={category.title}
                      src={category.icon}
                    />
                  </div>
                  <h3 className="[font-family:'Righteous',Helvetica] font-normal text-[#324361] text-[25px] text-center leading-[35px] mb-4">
                    {category.title.split(" ").map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i < category.title.split(" ").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="[font-family:'Righteous',Helvetica] font-normal text-[#4f547b] text-lg text-center">
                    {category.courses}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="relative w-full py-16">
          <div className="max-w-[1320px] mx-auto px-4">
            <Card className="relative w-full rounded-[20px] overflow-hidden bg-gradient-to-r from-[#0d37cd] to-[#7f56d9] text-white p-12">
              <div className="absolute w-full h-full top-0 left-0 z-0">
                <img
                  className="absolute w-[60px] h-[60px] top-[234px] left-[30px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-166.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-0 left-0"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-168.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[105px] left-[127px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-167.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[129px] right-[127px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-167-1.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[234px] right-[30px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-168-1.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-0 right-[60px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/ellipse-166-1.png"
                />
                <img
                  className="absolute w-20 h-[81px] top-[21px] left-[595px]"
                  alt="Polygon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/polygon-7.svg"
                />
                <img
                  className="absolute w-20 h-[81px] bottom-0 left-0"
                  alt="Polygon"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/polygon-7.svg"
                />
              </div>

              <CardContent className="relative z-10 flex flex-col items-center">
                <h2 className="[font-family:'Righteous',Helvetica] font-normal text-white text-[45px] text-center leading-[55px] mb-8">
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </h2>
                <p className="[font-family:'Righteous',Helvetica] font-normal text-[#ffffffb2] text-base text-center mb-8">
                  20k+ students daily learn with Eduvi. Subscribe for new
                  courses.
                </p>
                <div className="flex w-full max-w-xl">
                  <Input
                    placeholder="enter your email"
                    className="h-[60px] bg-[#ffffff33] text-white placeholder:text-white border-0 rounded-r-none rounded-l-[10px] [font-family:'Righteous',Helvetica] font-normal text-base"
                  />
                  <Button className="h-[60px] bg-[#0d37cd] hover:bg-[#0d37cd]/90 rounded-l-none rounded-r-[10px] [font-family:'Righteous',Helvetica] font-normal text-base">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative w-full py-20 [background:linear-gradient(180deg,rgba(219,237,255,1)_0%,rgba(219,237,255,0)_100%)] rotate-[179.91deg]">
          <div className="rotate-[-179.91deg] max-w-[1320px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="[font-family:'Righteous',Helvetica] font-normal text-[#0d37cd] text-[45px] text-center leading-[55px] mb-4">
                Testimonials
              </h2>
              <p className="[font-family:'Righteous',Helvetica] font-normal text-[#4e596b] text-[25px] text-center leading-10">
                What our student say about us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="w-full h-[200px] bg-white shadow-[0px_4px_4px_#00000040] p-6 relative"
                >
                  <CardContent className="flex flex-col h-full justify-between">
                    <p className="[font-family:'Righteous',Helvetica] font-normal text-[#7e7eaa] text-[15px] leading-8">
                      {testimonial.text}
                    </p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="w-[21px] h-[17px] text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute -top-10 right-8">
                    <img
                      className="w-[59px] h-[70px] object-cover"
                      alt="User"
                      src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/th--1--6.png"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-4">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between">
              {/* Company Info - Spans 2 columns on large screens */}
              <div className="w-full md:w-1/5">
                <img
                  className="w-[200px] sm:w-[247px] h-auto object-cover mb-4 sm:mb-6"
                  alt="Askmeidentity"
                  src="https://c.animaapp.com/mbqnlw9rI3QsZP/img/askmeidentity-2.png"
                />
                <p className="[font-family:'Righteous',Helvetica] font-normal text-black text-sm sm:text-[15px] opacity-50 leading-relaxed max-w-sm">
                  Sri Jagannath Nivas,8-1-164/345/A/1, Pragati Colony,
                  Mailardevpally, Nawab Saheb Kunta, Hyd, 500005
                </p>
              </div>

              {/* Quick Links */}
              <div className="w-full md:w-1/5">
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-[#0a033c] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  Quick links
                </h3>
                <ul className="space-y-2 sm:space-y-4">
                  {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="[font-family:'Righteous',Helvetica] font-normal text-black text-sm sm:text-base lg:text-xl hover:text-[#0d37cd] transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community */}
              <div className="w-full md:w-1/5">
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-[#0a033c] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  Community
                </h3>
                <ul className="space-y-2 sm:space-y-4">
                  {footerLinks.community.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="[font-family:'Righteous',Helvetica] font-normal text-black text-sm sm:text-base lg:text-xl hover:text-[#0d37cd] transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Classes */}
              <div className="w-full md:w-1/5">
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-[#0a033c] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  Classes
                </h3>
                <ul className="space-y-2 sm:space-y-4">
                  {footerLinks.classes.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="[font-family:'Righteous',Helvetica] font-normal text-black text-sm sm:text-base lg:text-xl hover:text-[#0d37cd] transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* More */}
              <div className="w-full md:w-1/5">
                <h3 className="[font-family:'Righteous',Helvetica] font-normal text-[#0a033c] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  More
                </h3>
                <ul className="space-y-2 sm:space-y-4">
                  {footerLinks.more.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="[font-family:'Righteous',Helvetica] font-normal text-[#1f1f39] text-sm sm:text-base lg:text-xl hover:text-[#0d37cd] transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#0019ff]/20">
              {/* Social Media Icons */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                {socialMedia.map((social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[66px] lg:h-[62px] bg-white rounded-full border border-solid border-[#0d37cd] flex items-center justify-center hover:bg-[#0d37cd] hover:scale-105 transition-all duration-200 cursor-pointer group"
                  >
                    <img
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-[37px] group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-200"
                      alt={social.alt}
                      src={social.icon}
                    />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px sm:h-2 bg-[#0019ff] opacity-20 mb-4 sm:mb-6"></div>

              {/* Copyright */}
              <div className="text-center">
                <p className="[font-family:'Righteous',Helvetica] font-normal text-[#4a4a4a] text-sm sm:text-[15px]">
                  Copyright © 2023 askmeidentity. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
