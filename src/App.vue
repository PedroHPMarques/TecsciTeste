<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { VApp, VAppBar, VContainer, VMain, VFooter, VBtn, VToolbar, VToolbarTitle, VSpacer } from 'vuetify/components'
</script>

<template>
  <VApp>
    <VAppBar app>
      <VContainer class="app-bar-container">
        <VToolbar class="app-bar-toolbar">
          <VSpacer />
          <div class="toolbar-links">
            <RouterLink to="/" class="toolbar-link">Home</RouterLink>
            <RouterLink to="/nomes" class="toolbar-link">Nomes</RouterLink>
            <RouterLink to="/graficos" class="toolbar-link">Gráficos</RouterLink>
          </div>
          <VSpacer />
        </VToolbar>
      </VContainer>
    </VAppBar>

    <VMain>
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>

    <!-- Rodapé -->
    <VFooter app>
      <VContainer>
        <div class="text-center">
          <p>© 2024 Pedro Henrique Marques. Todos os direitos reservados.</p>
        </div>
      </VContainer>
    </VFooter>
  </VApp>
</template>

<style scoped>
.v-app-bar {
  background-color: #32b46e;
  color: white;
}

.app-bar-container {
  background-color: #32b46e;
}

.app-bar-toolbar {
  background-color: #32b46e;
}

.toolbar-links {
  display: flex;
  gap: 20px; 
}

.toolbar-link {
  color: white;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent; /* Adiciona uma borda inferior que se destaca ao passar o mouse */
}

.toolbar-link:hover {
  color: #327a58;
  border-bottom: 2px solid #327a58; /* Cor da borda inferior ao passar o mouse */
}

.v-footer {
  background-color: #2d2c2c;
  color: white;
}

.v-footer p {
  margin: 0;
}

@media (max-width: 600px) {
  .toolbar-link {
    font-size: 0.875rem;
  }
}
</style>
