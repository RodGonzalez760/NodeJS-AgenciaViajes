import express from 'express';

import { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();


router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros );

router.get('/viajes', paginaViajes );

// : es un comodín que permite ser reemplazado por una variable, le puedo dar cualquier nombre a lo que sigue de los :
router.get('/viajes/:slug', paginaDetalleViaje );

router.get('/testimoniales', paginaTestimoniales );
router.post('/testimoniales', guardarTestimonial);

export default router;