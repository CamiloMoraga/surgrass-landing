<template>
  <section id="contacto" class="sg-section sg-section--surface">
    <div class="sg-container">
      <div class="sg-section-header">
        <div class="sg-section-eyebrow">Contacto</div>
        <h2 class="sg-section-title">Hablemos de tu campo</h2>
        <p class="sg-section-subtitle">
          Escríbenos y te ayudaremos con análisis de suelo, forraje, control de praderas e insumos (Cal).
        </p>
      </div>

      <div class="sg-contact-card">
        <form class="sg-contact-form" @submit.prevent="handleSubmit">
          
          <div class="form-group">
            <input 
              v-model="form.nombre"
              type="text" 
              placeholder="Nombre completo" 
              required
              :disabled="isLoading"
            />
          </div>

          <div class="form-group">
            <input 
              v-model="form.email"
              type="email" 
              placeholder="Correo electrónico" 
              required
              :disabled="isLoading"
            />
          </div>

          <div class="form-group">
            <input 
              v-model="form.telefono"
              type="tel" 
              placeholder="Teléfono (opcional)" 
              :disabled="isLoading"
            />
          </div>

          <div class="form-group">
            <textarea 
              v-model="form.mensaje"
              placeholder="Cuéntanos en qué podemos ayudarte"
              required
              :disabled="isLoading"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="sg-btn sg-btn--primary btn-submit"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Enviando...</span>
            <span v-else>Enviar mensaje</span>
          </button>

          <transition name="fade">
            <div v-if="feedback.message" :class="['feedback-msg', feedback.type]">
              <i v-if="feedback.type === 'success'" class="fa-solid fa-check-circle"></i>
              <i v-else class="fa-solid fa-circle-exclamation"></i>
              {{ feedback.message }}
            </div>
          </transition>

        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { db } from '@/firebase/firebase.js'; // ✅ Anti-Gravity Rule: Singleton import
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

// Estado del formulario
const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
});

const isLoading = ref(false);
const feedback = reactive({ type: '', message: '' });

// Variables de entorno (Anti-Gravity Rule: No hardcoding)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const handleSubmit = async () => {
  isLoading.value = true;
  feedback.message = '';

  try {
    // 1. Guardar en Firebase (Respaldo/CRM)
    await addDoc(collection(db, 'contactos'), {
      ...form,
      fecha: serverTimestamp(), // ✅ Anti-Gravity Rule: Timestamp server-side
      origen: 'landing-page'
    });

    // 2. Enviar Correo con EmailJS
    // El objeto templateParams debe coincidir con las variables de tu plantilla en EmailJS
    const templateParams = {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      mensaje: form.mensaje
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    // 3. Éxito
    feedback.type = 'success';
    feedback.message = '¡Mensaje enviado! Te contactaremos pronto.';
    
    // Limpiar formulario
    Object.keys(form).forEach(key => form[key] = '');

  } catch (error) {
    console.error('Error al enviar:', error);
    feedback.type = 'error';
    feedback.message = 'Hubo un problema. Por favor intenta contactarnos directamente al correo.';
  } finally {
    isLoading.value = false;
    // Ocultar mensaje después de 5 segundos
    if (feedback.type === 'success') {
      setTimeout(() => feedback.message = '', 5000);
    }
  }
};
</script>

<style scoped>
/* Reutilizamos tus estilos existentes y agregamos feedback */

.form-group {
  margin-bottom: 0; /* El espaciado lo maneja el gap del form si es flex, o margin si es block */
}

.sg-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sg-contact-form input,
.sg-contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--sg-color-border);
  border-radius: var(--sg-radius-sm);
  background-color: #ffffff;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.sg-contact-form input:focus,
.sg-contact-form textarea:focus {
  outline: none;
  border-color: var(--sg-color-primary);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.sg-contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Feedback Styles */
.feedback-msg {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-radius: var(--sg-radius-sm);
  font-size: var(--sg-text-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.feedback-msg.success {
  background-color: #dcfce7; /* Green 100 */
  color: #166534; /* Green 800 */
  border: 1px solid #bbf7d0;
}

.feedback-msg.error {
  background-color: #fee2e2; /* Red 100 */
  color: #991b1b; /* Red 800 */
  border: 1px solid #fecaca;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .sg-contact-card {
    padding: 1.5rem;
  }
}
</style>