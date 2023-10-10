import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

function Acordion() {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
      <>
        <Accordion className=' pl-1 pr-1 rounded-lg' open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(1)}>¿Por qué elegir AEROCLUB SKIWINGS?</AccordionHeader>
          <AccordionBody className='text-[#003459]'>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion className='text-[#003459]' open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(2)}>
          ¿Como Inscribirse en los Cursos?
          </AccordionHeader>
          <AccordionBody className='text-[#003459]'>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion className='text-[#003459]' open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(3)}>
          ¿Tengo que ser mayor de edad para realizar algun curso? 
          </AccordionHeader>
          <AccordionBody className='text-[#003459]'>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion className='text-[#003459]' open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(4)}>
          ¿Por qué elegir AEROCLUB SKIWINGS? 
          </AccordionHeader>
          <AccordionBody className='text-[#003459]'>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion className='text-[#003459]' open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(5)}>
          ¿Como Inscribirse en los Cursos?
          </AccordionHeader>
          <AccordionBody className='text-[#003459]'>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion  className='text-[#003459]' open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader className='text-[#003459]' onClick={() => handleOpen(6)}>
          ¿Por qué elegir AEROCLUB SKIWINGS?
          </AccordionHeader>
          <AccordionBody className='text-[#003459] '>
            We&aposre not always in the position that we want to be at. We&aposre constantly
            growing. We&aposre constantly making mistakes. We&aposre constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </>
    );
}

export default Acordion
