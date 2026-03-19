<script setup lang="ts">
import { privacyPolicy } from '@/data/privacy-policy';
import PolicySection from './PolicySection.vue';
</script>

<template>
  <div class="flex flex-col items-start gap-8 text-primary!">
    <h1>Privacy Policy</h1>
    <!-- <PolicySection v-for="(section, index) in privacyPolicy.sections" :section="section" :index="index + 1" /> -->
    <section class="flex flex-col gap-4">
      <h2>1. Who We Are</h2>
      <p>
        Reclaim Physiotherapy with Beth (“Reclaim with Beth”, “we”, “us”) provides home-visit physiotherapy services across Blackpool and the Fylde Coast. For the purposes of UK
        data protection law, Reclaim Physiotherapy with Beth is the Data Controller of your personal data.
      </p>
      <ul class="list-inside px-4">
        <li>
          <b>Data Controller: </b>
          Bethany Purvor
        </li>
        <li>
          <b>Email: </b>
          <a href="mailto:reclaimphysio.beth@gmail.com" target="_blank" class="hover:underline">reclaimphysio.beth@gmail.com</a>
        </li>
        <li>
          <b>ICO Registration Number: </b>
          <em>Pending Details</em>
        </li>
      </ul>
    </section>
    <section class="flex flex-col gap-4">
      <h2>2. What Information We Collect</h2>
      <p>We may collect and process the following information:</p>
      <section>
        <h3 class="underline">Personal Information</h3>
        <ul class="px-4 list-inside list-disc">
          <li>Name</li>
          <li>Address (for home visits)</li>
          <li>Email Address</li>
          <li>Telephone Number</li>
          <li>Next of kin details (where relevant)</li>
        </ul>
      </section>
      <section>
        <h3 class="underline">Health and Clinical Information (Special Category Data)</h3>
        <ul class="px-4 list-inside list-disc">
          <li>Medical history</li>
          <li>Assessment findings</li>
          <li>Treatment records</li>
          <li>Outcome measures</li>
          <li>Relevent health information where necessary for physiotherapy care</li>
        </ul>
      </section>
      <section>
        <h3 class="underline">Website and Technical Information</h3>
        <p>When you use our website, we may collect:</p>
        <ul class="px-4 list-inside list-disc">
          <li>IP address</li>
          <li>Device and browser information</li>
          <li>Website usage data</li>
          <li>Cookies and tracking technologies (including Meta Pixel)</li>
        </ul>
      </section>
    </section>
    <section class="flex flex-col gap-4">
      <h2>3. How We Collect Your Information</h2>
      <p>Information is collected:</p>
      <ul class="list-inside list-disc px-4">
        <li>Directly from you during enquiry, assessment, and treatment</li>
        <li>Through website enquiry forms</li>
        <li>During communication via telephone or email</li>
        <li>From family members or carers where appropriate and lawful</li>
      </ul>
    </section>
    <section class="flex flex-col gap-4">
      <h2>4. Lawful Basis for Processing</h2>
      <p>Under UK GDPR, we rely on the following lawful bases:</p>
      <h3>For physiotherapy services:</h3>
      <ul class="list-disc list-inside px-4">
        <li>Article 6(1)(b) - <em>Performance of a contract</em></li>
        <li>Article 9(2)(h) - <em>Provision of health or social care</em></li>
      </ul>
      <h3>For responding to enquiries and communication:</h3>
      <ul class="list-disc list-inside px-4">
        <li>Article 6(1)(f) - <em>Legitimate interests</em></li>
        <li>Article 6(1)(a) - <em>Consent (where applicable)</em></li>
      </ul>
    </section>
  </div>
</template>
