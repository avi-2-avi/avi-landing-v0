<script lang="ts">
    import pattern from "../static/images/pattern.png";
    import styles from "../styles"
    import { techStack, techStack2 } from "../constants";
    import Icon from '@iconify/svelte';
</script>

<section id="home" class="flex md:flex-row flex-col py-20 mx-12">
    <div class="flex flex-col lg:mr-12">
        <h1 class="font-encode sm:text-6xl text-5xl text-white">
            Hi, I'm Avi.<br class="sm:block hidden" /> { " "}
            <span class="font-bold text-secondary">A Software <br/>Engineer</span>
        </h1>
        <p class="md:max-w-[400px] mt-5 py-6 lg:text-[20px]">
            And a hard-working person, architecting reliable and meaningful solutions in tech.
        </p>
    </div>
    <div class="md:my-0 py-0 sm:py-12">
        <img src={pattern} alt="pattern" class="p-6 rounded-full ring ring-[#1b1e25] object-contain" />
    </div>
</section>

<section id="about" class="flex flex-col md:flex-row ">
    <div class="flex flex-col py-12 mx-[6%] md:mx-[20%] xl:mx-[26%]">
        <h2 class="{styles.heading2}">
            About Me
        </h2>
        <p class="${styles.paragraph}">
            My name is Cristina Vidal but I go by “Avi” on the internet. I started my journey into programming personalizing Linux distributions during 2020, which taugh me the basics of programming languages and bash scripting.
        </p>
        <p class="${styles.paragraph}">
            As of now, I have experience working in a <a href="https://agros.tech/" class="underline font-semibold">start-up</a> and I’m currently studying Information Systems and Industrial Engineering. My goal nowadays is to build viable solutions for consulting firms and to specialize in Backend Engineering and Cloud Computing.
        </p>
        <p class="${styles.paragraph} mt-2">
            Some tools I have used:
        </p>
        <div class="flex flex-col md:flex-row md:justify-around ml-[5%] md:ml-0">
            <ul class="mt-2">
                <div class="flex flex-col">
                    {#each techStack as {id, title, icon}, i}
                    <li class="mt-2 flex flex-row">
                        <Icon icon={icon} color="primary" class="hover:text-white mr-2" width="30px"/>
                        {title}
                    </li>
                    {/each}
                </div>
            </ul>
            <ul class="mt-2">
                <div class="flex flex-col">
                    {#each techStack2 as {id, title, icon}, i}
                    <li class="mt-2 flex flex-row">
                        <Icon icon={icon} color="primary" class="hover:text-white mr-2" width="30px"/>
                        {title}
                    </li>
                    {/each}
                </div>
            </ul>
        </div>
    </div>
</section>

<section id="experience">
    <div class="flex flex-col py-12 mx-[6%] md:mx-[20%] xl:mx-[26%]">
        <h2 class="{styles.heading2}">My work Experience</h2>
        <div class="flex">
            <div class="overflow-x-auto w-[50%]">
                <table class="table w-full">
                <!-- head -->
                <tbody>
                    <!-- row 1 -->
                    <tr>
                    <td>Cy Ganderton</td>
                    </tr>
                    <!-- row 2 -->
                    <tr class="active">
                    <td>Hart Hagerty</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                    <td>Brice Swyre</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="flex flex-col">
                <h3>My position</h3>
                <span class="700">Company</span>
                25 May, 2020 - 23 May, 2021
                <div>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    #home {
        align-items: center;
        justify-content: center;
    }
    
    #about {
        line-height: 30.8px;
    }

</style>