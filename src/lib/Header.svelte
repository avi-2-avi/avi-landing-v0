<script lang="ts">
    import {navLinks, socialLinks} from "../constants";
</script>

<header>
    <nav class="absolute w-screen justify-between items-center navbar flex sm:bg-stone-100">
        <ul class="list-none justify-start sm:flex hidden flex-1 ml-2">
            {#each navLinks as nav}
                <li class="mx-6 my-5">
                    <a href="#{nav.id}" class="text-black">{nav.title}</a>
                </li>
            {/each}
        </ul>
        
        <ul class="list-none sm:flex hidden items-center justify-end flex-1 mr-2">
            {#each socialLinks as social}
                <li class="mx-4">
                    <a href={social.url}>
                        <img src={social.icon} alt={social.id} class="h-[30px] object-contain" />
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    .navbar {
        height: 3em;
    }
</style>