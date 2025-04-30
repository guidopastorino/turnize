"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { List, X, CaretDown } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
  title: string;
  items: string[];
}

const categories: Category[] = [{
  title: 'Golosinas clásicas',
  items: [
    'Sugus', 'Menta Cristal', 'Media Hora', 'Yummy', 'Menthoplus', 'Chupetín Pico Dulce'
  ]
},
{
  title: 'Chocolates',
  items: [
    'Tita', 'Rhodesia', 'Marroc', 'Bon o Bon', 'Block', 'Chocolate Águila'
  ]
},
{
  title: 'Alfajores',
  items: [
    'Jorgito', 'Guaymallén', 'Fantoche', 'Capitán del Espacio', 'Terrabusi Triple', 'Havanna'
  ]
},
{
  title: 'Gomitas y gelatinas',
  items: [
    'Mogul Ositos', 'Mogul Frutales', 'Mogul Ácidas', 'Mogul Serpientes', 'Mogul Rellenas', 'Yummy Gomitas'
  ]
},
{
  title: 'Chicles',
  items: [
    'Beldent', 'Topline', 'Dentyne', 'Bazooka', 'Yummy Bubble', 'Adams'
  ]
},
{
  title: 'Snacks salados',
  items: [
    'Pitusas saladas', 'Palitos Salados Arcor', '3D', 'Cheetos', 'Lays', 'Maní Salado Georgalos', "Quento"
  ]
},
{
  title: 'Snacks dulces',
  items: [
    'Pepitos', 'Sonrisas', 'Mini Rhodesia', 'Mini Tita', 'Galletitas Chocolinas', 'Galletitas Oreo'
  ]
},
{
  title: 'Turrones y maní',
  items: [
    'Turrón Arcor', 'Mantecol', 'Turrón de Maní Georgalos', 'Maní Japonés', 'Turrón Blando Arcor', 'Mogul Maní'
  ]
},
{
  title: 'Postres y cereales',
  items: [
    'Flan Casero La Serenísima', 'Postrecito Danette', 'Yogurísimo con cereales', 'Cerealitas Dulces', 'Frutigran', 'Arroz con leche Serenito'
  ]
},
{
  title: 'Bebidas',
  items: [
    'Coca-Cola', 'Fanta', 'Sprite', 'Agua Villa del Sur', 'Cepita', 'Levité'
  ]
},
{
  title: 'Bebidas alcohólicas',
  items: [
    'Fernet Branca', 'Gancia', 'Smirnoff', 'Cerveza Quilmes', 'Cerveza Brahma', 'Cerveza Andes', 'Vino Toro'
  ]
},
{
  title: 'Helados de kiosco',
  items: [
    'Bombón Helado', 'Conito', 'Palito de agua', 'Crocantino', 'Frigor', 'Torpedo'
  ]
},
{
  title: 'Productos de promo',
  items: [
    '2x1 en Guaymallén', 'Combo Tita + Rhodesia', 'Promo Pico Dulce x3', 'Bon o Bon Pack', 'Pack Alfajores Fantoche', 'Promo Coca + Turrón'
  ]
}
];

export default function HamburgerMenu() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Botón de hamburguesa */}
      <button
        className="p-2 flex md:hidden text-black dark:text-white"
        onClick={handleOpen}
        aria-label="Abrir menú"
      >
        <List size={32} weight="bold" />
      </button>

      <AnimatePresence>
        {open && (
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            slots={{
              // El fondo (backdrop) se anima con opacidad para suavidad visual
              backdrop: () => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    zIndex: -1
                  }}
                />
              )
            }}
            PaperProps={{
              // Animación del panel deslizándose desde la derecha
              component: motion.div,
              initial: { x: '100%' },
              animate: { x: 0 },
              exit: { x: '100%' },
              transition: { type: 'tween', duration: 0.2 },
              className: 'bg-white dark:bg-neutral-900 text-black dark:text-white',
              sx: {
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                height: '100dvh',
                color: theme.palette.text.primary,
                m: 0,
                p: 0,
                boxShadow: 'none'
              }
            }}
            keepMounted
          >
            {/* Header del menú */}
            <header className="h-14 flex items-center justify-between p-4 bg-white dark:bg-neutral-950/30 dark:text-white shadow-md z-50 relative">
              <Typography variant="h6" className='!pl-2'>Menú</Typography>
              <IconButton
                onClick={handleClose}
                aria-label="Cerrar menú"
                className="!text-black dark:!text-white"
              >
                <X size={24} weight="bold" />
              </IconButton>
            </header>

            {/* Contenido del menú */}
            <DialogContent className="!p-2 !pb-12">
              <div className="flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
                {categories.map((cat) => (
                  <Accordion key={cat.title}
                    disableGutters
                    className="!bg-transparent"
                    sx={{
                      boxShadow: 'none'
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <CaretDown
                          size={24}
                          weight="bold"
                          className="text-gray-800 dark:text-gray-200"
                        />
                      }
                    >
                      <Typography className="font-semibold !text-xl !text-black dark:!text-white">
                        {cat.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='!pt-0'>
                      <ul className="pl-4 space-y-1 text-lg">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}