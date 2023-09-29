<script>

export default {
  name: 'AboutView',
  components: {
  },
  data() {
    return {
      reveal1: false,
      reveal2: false,
      reveal3: false,
      reveal4: false,
    }
  },
}
</script>

<template>
<v-main>
  <v-row>
    <v-card
      class="mx-auto ma-3"
      max-width="1000"
      elevation="20"
      rounded="xl"
    >
      <v-card-text class="bg-grey-darken-1">
        <p class="text-h4 text-center">
          Who is KR8TOS?
        </p>
        <h3 class="font-monospace text-center">
          We are a SBA certified veteran owned Cloud Consulting Company
          operating from Central NC since 2022 and bringing over a decade
          of experience supporting expeditionary and tactical communication
          solutions to each branch of the United States military.
          </h3>
          <h2 class="font-monospace text-center ma-3">
            Select the cards below to learn more about our services!
          </h2>

      </v-card-text>
    </v-card>
  </v-row>
  <v-row>
      <v-card
        class="mx-auto ma-6 bg-grey-lighten-2"
        width="1000"
        rounded="xl"
      >
        <v-card-text>
          <p class="text-h4 text-center">
            Cloud to Edge Adoption
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="green"
            @click="reveal1 = true"
          >
            Learn More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal1"
            class="v-card--reveal bg-grey-lighten-2"
            style="height: 100%;"
          >
            <v-card-text class="pb-0">
              <!-- <p class="text-h4 text--primary">
                Origin
              </p> -->
              <h2 class="text-center font-monospace font-weight-light">
                Design and implement cloud-native architecture for constrained operational edge environments, integrating with industry standards and optimizing workload distribution, while ensuring cost-effective, scalable, compliant, and secure data orchestration across hybrid infrastructure.
              </h2>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-btn
                variant="text"
                color="error"
                @click="reveal1 = false"
              >
                Close
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
</v-row>

<v-row>
  <v-card
    class="mx-auto ma-3 bg-grey-lighten-2"
    width="1000"
    rounded="xl"
  >
    <v-card-text>
      <p class="text-h4 text-center">
        DevSecOps Methodology
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        color="green"
        @click="reveal2 = true"
      >
        Learn More
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal2"
        class="v-card--reveal bg-grey-lighten-2"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <!-- <p class="text-h4 text--primary">
            Origin
          </p> -->
          <h2 class="text-center font-monospace font-weight-light">
            Implement and maintain CI/CD toolchains, utilizing automated workflows and security tests for compliance and vulnerability detection, while promoting collaboration among development, operations, and security teams, ensuring resilient infrastructure and maintaining transparent documentation.
          </h2>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="error"
            @click="reveal2 = false"
          >
            Close
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</v-row>



<v-row>
  <v-card
    class="mx-auto ma-6 bg-grey-lighten-2"
    width="1000"
    rounded="xl"
  >
    <v-card-text>
      <p class="text-h4 text-center">
        Scaled Agile Project Management
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        color="green"
        @click="reveal3 = true"
      >
        Learn More
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal3"
        class="v-card--reveal bg-grey-lighten-2"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <!-- <p class="text-h4 text--primary">
            Origin
          </p> -->
          <h2 class="text-center font-monospace font-weight-light">
            Employ agile estimation for prioritized backlogs, integrating project deliveries with existing DevSecOps tools, and organizing workflow into Program Increments with associated planning, sprints, roadmaps, and reviews.
          </h2>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="error"
            @click="reveal3 = false"
          >
            Close
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</v-row>


<v-row>
  <v-card
    class="mx-auto ma-3 bg-grey-lighten-2"
    width="1000"
    rounded="xl"
  >
    <v-card-text>
      <p class="text-h4 text-center">
        Curriculum Development and Training
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        color="green"
        @click="reveal4 = true"
      >
        Learn More
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal4"
        class="v-card--reveal bg-grey-lighten-2"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <!-- <p class="text-h4 text--primary">
            Origin
          </p> -->
          <h2 class="text-center font-monospace font-weight-light">
            Plan, develop, deliver, and integrate an occuptational specialty credentialing program and curriculum to Special Operation Forces communicators. Facilitate training iterations in periods ranging from 1/2 day and up to 5 months for active duty military personnel, federal general schedule civilian employees, and contractors. Course material covers topic areas that include Linux essentials, programming fundamentals, introduction to cloud-native concepts, network automation, bash and python scripting, containerization, kubernetes, application development, devsecops methodology, and scaled agile project management.
          </h2>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="error"
            @click="reveal4 = false"
          >
            Close
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</v-row>


  </v-main>
</template>
