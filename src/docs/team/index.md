---
aside: false
---

<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from "vitepress/theme";

const members = [
  {
    avatar: "https://www.github.com/AhmdShams.png",
    name: "Ahmad Shams",
    title: "email@gl",
    links: [
      { icon: "facebook", link: "https://github.com/AhmdShams" },
      { icon: "twitter", link: "https://github.com/AhmdShams" },
      { icon: "github", link: "https://github.com/AhmdShams" }
    ]
  },
  {
    avatar: "https://www.github.com/MahmoudKrema.png",
    name: "Mahmoud Krema",
    title: "email@gl",
    links: [
      { icon: "facebook", link: "https://github.com/MahmoudKrema" },
      { icon: "twitter", link: "https://github.com/MahmoudKrema" },
      { icon: "github", link: "https://github.com/MahmoudKrema" }
    ]
  },
  {
    avatar: "https://www.github.com/Metainy.png",
    name: "Mahmoud El Metainy",
    title: "m.elmetainy@gl",
    links: [
      { icon: "facebook", link: "https://github.com/Metainy" },
      { icon: "twitter", link: "https://github.com/Metainy" },
      { icon: "github", link: "https://github.com/Metainy" }
    ]
  },
  {
    avatar: "https://www.github.com/Mostafaelkhmisi.png",
    name: "Mostafa El Khamisi",
    title: "email@gl",
    links: [
      { icon: "facebook", link: "https://github.com/Mostafaelkhmisi" },
      { icon: "twitter", link: "https://github.com/Mostafaelkhmisi" },
      { icon: "github", link: "https://github.com/Mostafaelkhmisi" }
    ]
  },
  {
    avatar: "https://www.github.com/omarsalaheldieen.png",
    name: "Omar Salah",
    title: "email@gl",
    links: [
      { icon: "facebook", link: "https://github.com/omarsalaheldieen" },
      { icon: "twitter", link: "https://github.com/omarsalaheldieen" },
      { icon: "github", link: "https://github.com/omarsalaheldieen" }
    ]
  },
  {
    avatar: "https://www.github.com/ShadyAref.png",
    name: "Shady Aref",
    title: "email@gl",
    links: [
      { icon: "facebook", link: "https://github.com/ShadyAref" },
      { icon: "twitter", link: "https://github.com/ShadyAref" },
      { icon: "github", link: "https://github.com/ShadyAref" }
    ]
  },
]

</script>

<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="small" :members="members" />

</VPTeamPage>
