<script lang="ts">
    import {navLinks } from "../constants";
    import Icon from '@iconify/svelte';
</script>

<header>
    <nav class="fixed w-screen justify-between items-center flex z-50 bg-base-100">
        <ul class="list-none justify-start sm:flex hidden flex-1 ml-2">
            {#each navLinks as nav}
                <li class="mx-6 my-5 hover:text-white">
                    <a href="#{nav.id}">{nav.title}</a>
                </li>
            {/each}
        </ul>
        
        <ul class="list-none sm:flex hidden items-center justify-end flex-1 mr-2">
            <li>
                <a href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/">
                    <Icon icon="akar-icons:linkedin-box-fill" color="primary" class="hover:text-white" width="35px"/>
                </a>
            </li>
            <li class="mx-10">
                <a href="https://github.com/avi-2-avi">
                    <Icon icon="akar-icons:github-fill" color="primary" class="hover:text-white" width="35px"/>
                </a>
            </li>
        </ul>
        
        <div class="navbar bg-base-100 sm:hidden">
            <div class="navbar-start">
              <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <div class="dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {#each navLinks as nav}
                        <li>
                            <a href="#{nav.id}">{nav.title}</a>
                        </li>
                    {/each}
                </ul>
              </div>
            </div>
            <div class="navbar-end mr-2">
                <a href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/">
                    <Icon icon="akar-icons:linkedin-box-fill" color="primary" width="28px"/>
                </a>
                <span class="mx-2"/>
                <a href="https://github.com/avi-2-avi">
                    <Icon icon="akar-icons:github-fill" color="#primary" width="28px"/>
                </a>
            </div>
          </div>
    </nav>
</header>

<style>
    
</style>