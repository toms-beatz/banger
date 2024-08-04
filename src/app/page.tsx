"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Calendar, Smile, ListMusic, HandCoins, ImagePlus } from 'lucide-react'
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from 'react';


const launchDate = new Date('2024-06-21T10:00:00'); // Replace with your launch date

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = launchDate.getTime() - now.getTime();
  let timeLeft: TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <div className="mx-auto mb-24 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-banger-purple text-pWhite px-3 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <div className='text-xs font-sans font-semibold text-gray-700 flex items-center'>
              <Calendar className='w-5 h-5 mr-2' /><span className='lg:flex hidden'>Lancement dans</span>
              <div className='text-xs font-bold ml-1'>
                {timeLeft.days} jours {timeLeft.hours} heures {timeLeft.minutes} minutes {timeLeft.seconds} secondes
              </div>
            </div>
          </div>
          <h1 className='max-w-4xl text-5xl font-title font-bold md:text-6xl lg-:text-7xl text-banger-blue dark:text-pWhite'>
            Bienvenue sur <span className='bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue'>Banger</span> ! <span className='text-5xl'>🎉</span>
          </h1>
          <p className='mt-5 max-w-80 lg:max-w-prose text-zinc-700 sm:text-lg text-banger-blue dark:text-pWhite mb-24 font-sans'>
            Pour que toutes vos soirées deviennent des Bangers.
          </p>
          <div className='text-banger-purple'>
            <Link className="flex flex-col items-center justify-center" href="#section-1">
              <span className='underline underline-offset-2 font-sans'>Découvrez Banger</span>
              <ArrowDown className='w-7 h-7 mt-7 animate-bounce' />
            </Link>
          </div>
          <Image
            src='/cocktail.svg'
            alt='product preview'
            width={100}
            height={100}
            quality={100}
            className='ml-auto absolute -rotate-24 left-24 top-24 lg:opacity-70 opacity-0'
          />
          <Image
            src='/charagirl.svg'
            alt='product preview'
            width={100}
            height={100}
            quality={100}
            className='ml-auto absolute bottom-24 right-24 lg:opacity-70 opacity-0'
          />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='lg:pb-48 pb-24 relative'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-20">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue font-title">Fonctionnalités</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 font-sans">
                Découvrez les fonctionnalités de Banger qui vont transformer vos soirées.
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <dl className="font-sans grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  <div className="relative pl-16">
                    <dt className=" text-base font-semibold leading-7 text-gray-900 bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <Smile className='w-6 h-6 text-banger-purple' />
                      </div>
                      Choix du mood de la soirée
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      Personnalisez l'ambiance de votre soirée en un clic.
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <ListMusic className='w-6 h-6 text-banger-purple' />
                      </div>
                      Playlist collaborative
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      Créez une playlist ensemble, pour une ambiance musicale variée.
                    </dd>
                  </div>
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <HandCoins className='w-6 h-6 text-banger-purple' />
                      </div>
                      Gestion de cagnotte
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      Simplifiez la répartition des dépenses entre amis.
                    </dd>
                  </div>

                  <div className="relative pl-16 !mx-auto">
                    <dt className="text-base font-semibold leading-7 text-gray-900 bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <ImagePlus className='w-6 h-6 text-banger-purple' />
                      </div>
                      Partage de médias
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      Capturez et partagez les moments mémorables de vos soirées.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section >
      </MaxWidthWrapper >

      <MaxWidthWrapper className='lg:pb-48 pb-24 relative'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue font-title">Nos abonnements</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 font-sans">
                Choisissez la formule qui correspond à vos besoins et transformez votre expérience dès aujourd'hui !
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="flex flex-col p-6 justify-center items-center mx-auto max-w-lg text-center text-gray-900 bg-pWhite/80 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:px-8 xl:py-12 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-3xl text-banger-purple font-bold font-title">Essentiel</h3>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl font-extrabold font-title">Gratuit</span>
                </div>
                <ul role="list" className="my-8 space-y-4 text-left font-sans">
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Accès au calendrier interactif pour la planification des soirées</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Possibilité de choisir parmi une sélection de thèmes de soirée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Gestion de cagnotte pour partager les dépenses entre les participants</span>
                  </li>
                </ul>
                <Link href="#section-1" className="text-pWhite bg-banger-purple  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mt-auto flex font-title">Commencer <ArrowRight className='w-5 h-5 ml-2' /></Link>
              </div>
              <div className="flex flex-col p-6 justify-center items-center mx-auto max-w-lg text-center text-gray-900 bg-pWhite/80 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:px-8 xl:py-12 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-3xl text-banger-purple font-bold font-title">Premium</h3>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl font-extrabold font-title">5,99€</span>
                  <span className="text-gray-500 dark:text-gray-400 font-title">/mois</span>
                </div>
                <ul role="list" className="my-8 space-y-4 text-left font-sans">
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Toutes les fonctionnalités de l'abonnement Essentiel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Suggestions de thèmes personnalisés selon les intérêts des participants.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Stockage supplémentaire pour un nombre illimité de photos de soirée</span>
                  </li>
                </ul>
                <Link href="#section-1" className="text-pWhite bg-banger-purple  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mt-auto flex font-title">Commencer <ArrowRight className='w-5 h-5 ml-2' /></Link>
              </div>
              <div className="flex flex-col p-6 justify-center items-center mx-auto max-w-lg text-center text-gray-900 bg-pWhite/80 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:px-8 xl:py-12 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-3xl text-banger-purple font-bold font-title">VIP</h3>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl font-extrabold font-title">9,99€</span>
                  <span className="text-gray-500 dark:text-gray-400 font-title">/mois</span>
                </div>
                <ul role="list" className="my-8 space-y-4 text-left font-sans">
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Toutes les fonctionnalités des abonnements Essentiel et Premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Accès prioritaire au service client pour une assistance personnalisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Invitations exclusives à des événements spéciaux organisés par l'application</span>
                  </li>
                </ul>
                <Link href="#section-1" className="text-pWhite bg-banger-purple  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mt-auto flex font-title">Commencer <ArrowRight className='w-5 h-5 ml-2' /></Link>
              </div>
            </div>
          </div>

        </section>
        <Image
          src='/addoss.svg'
          alt='product preview'
          width={50}
          height={100}
          quality={100}
          className='ml-auto absolute bottom-80 translate-y-16 right-16 translate-x-2 lg:opacity-70 opacity-0'
        />

      </MaxWidthWrapper>

      <MaxWidthWrapper className='lg:pb-48 pb-24 !scroll-mt-60' id="section-1">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className=''>

              <Image
                src='/charadrink.svg'
                alt='product preview'
                width={150}
                height={100}
                quality={100}
                className='ml-auto absolute -rotate-24 left-20 top-[2510px] lg:opacity-70 opacity-0 translate-y-44'
              />
              {/* <div className='mx-auto max-w-6xl px-6 lg:px-8 '> */}
              <div className='mt-16 flex lg:flex-row flex-col gap-12 items-center justify-center sm:mt-24'>
                <div className='-m-2 rounded-xl lg::-m-4 lg:rounded-2xl dark:bg-transparent bg-pWhite/40 backdrop-blur-lg lg:w-1/2'>
                  <Image
                    src='/mockup.png'
                    alt='product preview'
                    width={1080}
                    height={480}
                    quality={100}
                    className='rounded-md p-2 sm:p-8 md:p-20 shadow-2xl'
                  />
                </div>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                  <h2 id='' className='font-title text-2xl font-bold bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue'>
                    Téléchargez notre application et commencez à organiser des Bangers
                  </h2>
                  <p className='break-words font-sans'>
                    Simplifiez la planification de vos événements avec notre interface intuitive et profitez d'outils puissants pour gérer chaque détail.
                    Rejoignez dès maintenant notre communauté et transformez vos idées en soirées inoubliables !
                  </p>
                  <div className='flex items-center gap-4 justify-between lg:justify-start mt-4'>
                    <Link href="https://apps.apple.com/app/Nom-de-votre-application/">
                      <Image
                        src='/appstore1.png'
                        alt='product preview'
                        width={222}
                        height={66}
                        quality={100}
                        className='cursor-pointer lg:w-48 w-40'
                      />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=Nom-de-votre-application/">
                      <Image
                        src='/google-play-badge.png'
                        alt='google-play-badge preview'
                        width={222}
                        height={66}
                        quality={100}
                        className='cursor-pointer lg:w-48 w-40'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='relative'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-20">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-banger-purple to-banger-blue text-transparent bg-clip-text dark:text-banger-blue font-title">FAQ</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 font-sans">
                Retrouvez ici les réponses aux questions les plus fréquemment posées. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
              </p>
            </div>
            <Accordion type="single" collapsible className='font-sans'>
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment puis-je m'abonner à un plan Banger ?</AccordionTrigger>
                <AccordionContent>
                  Pour vous abonner à un plan Banger, rendez-vous sur la page des abonnements et choisissez l'offre qui correspond à vos besoins. Vous serez guidé tout au long du processus d'inscription.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quels sont les avantages des différents plans d'abonnement ?</AccordionTrigger>
                <AccordionContent>
                  Chaque plan d'abonnement offre des avantages spécifiques. Le plan Essentiel est gratuit et inclut des fonctionnalités de base, tandis que les plans Premium et VIP offrent des fonctionnalités avancées telles que des suggestions de thèmes personnalisés et un service client prioritaire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Puis-je annuler mon abonnement à tout moment ?</AccordionTrigger>
                <AccordionContent>
                  Oui, vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte. L'annulation prendra effet à la fin de votre période de facturation en cours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Comment contacter le service client ?</AccordionTrigger>
                <AccordionContent>
                  Vous pouvez contacter notre service client via le formulaire de contact sur notre site web ou en envoyant un e-mail à support@banger.com. Nous vous répondrons dans les plus brefs délais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Y a-t-il une version mobile de l'application Banger ?</AccordionTrigger>
                <AccordionContent>
                  Oui, l'application Banger est disponible sur iOS et Android. Vous pouvez la télécharger depuis l'App Store ou Google Play en suivant les liens sur notre site web.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='relative font-sans'>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex items-center lg:justify-start justify-center">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Banger</a>. Tous droits réservés.
              </span>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </>
  );
}
