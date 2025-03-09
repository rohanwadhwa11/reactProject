import React from 'react'
import FAQ from './FAQ'
import Button from './Button'

export default function FAQs() {
    let questions = [
        {
            sno: 1,
            ques: " Who is this course for?",
            ans: "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!"
        },
        {
            sno: 2,
            ques: "What tools do I need to take this course?",
            ans: "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support."
        },
        {
            sno: 3,
            ques: "Will I receive a certificate?",
            ans: "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities."
        },
        {
            sno: 4,
            ques: "Can I monetire ml digital art ader this course?",
            ans: "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away."
        },
        {
            sno: 5,
            ques: "What happens if I miss a live session?",
            ans: "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing."
        },
        {
            sno: 6,
            ques: "How do I appll the coupon code?",
            ans: "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses."
        },
        {
            sno: 7,
            ques: "What if I don't have a tablet?",
            ans: "You can still take the course using a mouse & free digital art software ­like Krita+. However, a tablet is recommended for be%er results."
        },
        {
            sno: 8,
            ques: "How do I enroll?",
            ans: "Click the Enroll Now bu%on, make the payment, and get instant access to the course materials!"
        },
    ]
  return (
    <div className='mt-2'>
      <h3 className='text-center mb-2'>FAQs</h3>
        {questions.map((question) =>{
            return <FAQ question={question} />
        })}
        <Button title = "Let's get started"/>
    </div>
  )
}
