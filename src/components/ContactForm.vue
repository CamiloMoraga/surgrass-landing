<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({});

const validate = () => {
  errors.value = {};

  if (!form.value.name.trim()) {
    errors.value.name = "El nombre es obligatorio";
  }

  if (!form.value.email.trim()) {
    errors.value.email = "El correo es obligatorio";
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = "Correo no válido";
  }

  if (!form.value.message.trim()) {
    errors.value.message = "El mensaje es obligatorio";
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (!validate()) return;

  // 🚧 Backend pendiente (fuera de alcance)
  console.log("Formulario válido:", form.value);

  alert("Gracias por contactarnos. Pronto nos comunicaremos contigo.");

  // Reset
  form.value = {
    name: "",
    email: "",
    message: "",
  };
};
</script>

<template>
  <section id="contacto" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contáctanos</h2>
      <p class="section-subtitle">
        ¿Tienes dudas o quieres saber más sobre nuestros servicios?
      </p>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Nombre</label>
          <input
              type="text"
              v-model="form.name"
              placeholder="Tu nombre"
          />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <label>Correo electrónico</label>
          <input
              type="email"
              v-model="form.email"
              placeholder="tu@email.com"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label>Mensaje</label>
          <textarea
              rows="5"
              v-model="form.message"
              placeholder="Escribe tu mensaje"
          />
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>

        <button type="submit" class="btn-primary">
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 1.5rem;
  background-color: #f9fafb;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 500;
  margin-bottom: 0.4rem;
}

input,
textarea {
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #2f7d32; /* verde Surgrass */
}

.error {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: #d32f2f;
}

.btn-primary {
  align-self: flex-start;
  padding: 0.7rem 1.8rem;
  background-color: #2f7d32;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #256528;
}

/* Responsive */
@media (max-width: 600px) {
  .section-title {
    font-size: 1.6rem;
  }
}
</style>
