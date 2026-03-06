'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Builds from '@/components/Builds'
import Stack from '@/components/Stack'
import Profiles from '@/components/Profiles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in')
        }
      })
    }, observerOptions)

    // Wait for DOM to be fully loaded
    const initObserver = () => {
      const elementsToObserve = document.querySelectorAll(
        '#builds > div > div, #stack > div > div, #profiles > div > div'
      )
      elementsToObserve.forEach((el) => observer.observe(el))
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initObserver, 100)

    const handleButtonMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement
      target.style.transform = 'translateY(-2px)'
    }

    const handleButtonMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement
      target.style.transform = 'translateY(0)'
    }

    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleButtonMouseEnter)
      button.addEventListener('mouseleave', handleButtonMouseLeave)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleButtonMouseEnter)
        button.removeEventListener('mouseleave', handleButtonMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Builds />
      <Stack />
      <Profiles />
      <Contact />
      <Footer />
    </>
  )
}
