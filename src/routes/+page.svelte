<script lang="ts">
    import pattern from "../static/images/pattern.png";
    import styles from "../styles"
</script>

<section id="home" class="flex md:flex-row flex-col py-10 mx-5">
    <div class="flex flex-col lg:mr-12">
        <h1 class="font-encode sm:text-6xl text-5xl">
            Hi, I'm Avi.<br class="sm:block hidden" /> { " "}
            <span class="font-bold text-[#AABAD7]">A Software <br/>Engineer</span>
        </h1>
        <p class="md:max-w-[400px] mt-5 py-6 lg:text-[20px]">
            And a hard-working person, architecting reliable and meaningful solutions in tech.
        </p>
    </div>
    <div class="md:my-0 py-0 sm:py-12">
        <img src={pattern} alt="pattern" class="h-[360px] object-contain" />
    </div>
    
</section>

<section id="about" class="flex flex-col md:flex-row">
    <div class="flex">
        <div class="flex flex-col py-12">
            <h2 class="font-semibold text-3xl">
                About Me
            </h2>
            <p class="${styles.paragraph}">
                My name is Cristina Vidal but I go by “Avi” on the internet. I started my journey into programming personalizing Linux distributions during 2020, which taugh me the basics of programming languages and bash scripting.
            </p>
            <p class="${styles.paragraph}">
                As of now, I have experience working in a <a href="https://agros.tech/" class="underline font-semibold">start-up</a> and I’m currently studying Information Systems. My goal nowadays is to build viable solutions for consulting firms and to specialize in Backend Engineering and Cloud Computing.
            </p>
            <p class="${styles.paragraph}">
                Some tools I have used:
            </p>

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