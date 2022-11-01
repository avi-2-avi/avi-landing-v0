<script lang="ts">
    import pattern from "../static/images/pattern.png";
    import styles from "../styles"
    import { techStack, techStack2, experience } from "../constants";
    import Icon from '@iconify/svelte';

    let current = '0';
    
    function openLink() {
        window.open("mailto:avicon95@proton.me")
    }
    
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

<section id="about" class="flex flex-col md:flex-row mb-12">
    <div class="flex flex-col py-12 mx-[6%] md:mx-[20%] xl:mx-[20%]">
        <h2 class="{styles.heading2}">
            About Me
        </h2>
        <p class="${styles.paragraph}">
            My name is Cristina Vidal but I go by “Avi” on the internet. I started my journey into programming personalizing Linux distributions during 2020, which taugh me the basics of programming languages and bash scripting.
        </p>
        <p class="${styles.paragraph}">
            As of now, I have experience working in a <a href="https://agros.tech/" class="underline font-semibold hover:text-secondary">start-up</a> and I’m currently studying Information Systems and Industrial Engineering. My goal nowadays is to build viable solutions for consulting firms and to specialize in Backend Engineering and Cloud Computing.
        </p>
        <p class="${styles.paragraph} mt-2">
            Some tools I have used:
        </p>
        <div class="flex flex-col md:flex-row md:justify-around ml-[5%] md:ml-0">
            <ul class="mt-2">
                <div class="flex flex-col">
                    {#each techStack as {id, title, icon}, i}
                    <li class="mt-2 flex flex-row">
                        <Icon icon={icon} color="primary" class="hover:text-secondary mr-2" width="30px"/>
                        {title}
                    </li>
                    {/each}
                </div>
            </ul>
            <ul class="mt-2">
                <div class="flex flex-col">
                    {#each techStack2 as {id, title, icon}, i}
                    <li class="mt-2 flex flex-row">
                        <Icon icon={icon} color="primary" class="hover:text-secondary mr-2" width="30px"/>
                        {title}
                    </li>
                    {/each}
                </div>
            </ul>
        </div>
    </div>
</section>

<section id="experience">
    <div class="flex flex-col py-12 mx-[6%] md:mx-[20%] xl:mx-[20%] my-[8%]">
        <h2 class="{styles.heading2}">My work Experience</h2>
        <div class="flex flex-col md:flex-row">
            <div class="overflow-x-auto md:min-w-fit mr-10">
                <table class="table w-[100%] text-center">
                <tbody>
                    <tr class:active="{current === '0'}"
                    on:click="{() => current = '0'}">
                    <td>{experience[0].acronym}</td>
                    </tr>
                    <tr class:active="{current === '1'}"
                    on:click="{() => current = '1'}">
                    <td>{experience[1].acronym}</td>
                    </tr>
                    <tr class:active="{current === '2'}"
                    on:click="{() => current = '2'}">
                    <td>{experience[2].acronym}</td>
                    </tr>
                    <tr class:active="{current === '3'}"
                    on:click="{() => current = '3'}">
                    <td>{experience[3].acronym}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="flex flex-col">
                <h3 class="{styles.job_position}">{experience[+current].position}</h3>
                <span class="font-semibold">{experience[+current].company}</span>
                {experience[+current].date}
                <ul class="list-disc list-inside mt-5">
                    {#each experience[+current].goals as goal}
                    <li>{goal}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<section id=projects>
    <div class="flex flex-col py-12 mx-[6%] md:mx-[20%] xl:mx-[20%]">
        <h2 class={styles.heading2}>My Projects:</h2>
    <div>
    Comming soon...
</section>

<section id=contact class="flex justify-around mb-[8%]">
    <div class="card w-[50%] bg-neutral text-neutral-content px-10 py-7">
        <div class="card-body items-center text-center">
            <h3 class="card-title">Get in touch with me!</h3>
                <p>I am currently looking for a new work experience. Feel free to contact me through my <a href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/" class="font-semibold hover:text-primary">LinkedIn</a> or mail and I’ll get back to you as soon as I can. You can send me a message in English or Spanish.</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary mt-4" on:click="{openLink}">Write me a message</button>
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

    .active {
        font-weight: 700;
        border-left: 3px solid #ebbcba;
    }
</style>