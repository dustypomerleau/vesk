<script lang="ts">
    import { doctors } from "$lib/content/doctors";
</script>

<div
    id="doctors"
    class="flex flex-col items-center justify-start sm:bg-gray-300 md:flex-row md:flex-wrap md:content-start md:items-stretch md:justify-center"
>
    {#each doctors as doc}
        <div class="wide-card">
            <div class="overflow-hidden rounded-t-md">
                <picture>
                    <source type="image/avif" srcset="/{doc.image}.avif" />
                    <source type="image/webp" srcset="/{doc.image}.webp" />
                    <source type="image/jpeg" srcset="/{doc.image}.jpg" />
                    <img
                        src="/{doc.image}.jpg"
                        alt={doc.alt}
                        class="h-96 w-full object-cover object-top"
                    />
                </picture>
            </div>
            <div class="-mt-0.5 flex w-full flex-row bg-gray-200 sm:justify-center">
                <div class="px-6 py-2">
                    <div class="flex flex-row flex-wrap items-baseline justify-start">
                        <div
                            class="bg-gradient-to-r from-orange-10 to-orange-8 bg-clip-text pr-2 text-2xl font-medium text-transparent"
                        >
                            {doc.name}
                        </div>
                        <div class="text-base">
                            {doc.credentials}
                        </div>
                    </div>
                    <div class="font-normal text-orange-10">
                        {@html doc.specialties}
                    </div>
                </div>
            </div>
            <div class="px-6 py-4">
                {#each doc.bio as par}
                    <div class="mb-4 last:mb-1">
                        {par}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
