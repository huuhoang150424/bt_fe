<script setup>
  import { defineAsyncComponent } from 'vue';

  const HeroSection = defineAsyncComponent({
    loader: () => import('./components/hero.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const AboutSection = defineAsyncComponent({
    loader: () => import('./components/about.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const ServicesSection = defineAsyncComponent({
    loader: () => import('./components/service.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const WhyUsSection = defineAsyncComponent({
    loader: () => import('./components/why-us.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const PricingSection = defineAsyncComponent({
    loader: () => import('./components/pricing.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const ProcessSection = defineAsyncComponent({
    loader: () => import('./components/process.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const TeamSection = defineAsyncComponent({
    loader: () => import('./components/team.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const TestimonialsSection = defineAsyncComponent({
    loader: () => import('./components/testimonials.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const ContactSection = defineAsyncComponent({
    loader: () => import('./components/contact.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });

  const BlogSection = defineAsyncComponent({
    loader: () => import('./components/blog.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });
</script>

<template>
  <div class="w-full">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyUsSection />
    <PricingSection />
    <ProcessSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
    <BlogSection />
  </div>
</template>
