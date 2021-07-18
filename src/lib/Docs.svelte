<script>
    import { doctors } from "$lib/doctors";
</script>

<div
    id="doctors"
    class="flex flex-col md:flex-row md:flex-wrap justify-start md:justify-center md:content-start items-center md:items-stretch pt-4"
>
    {#each doctors as doc}
        <div class="doctor">
            <div class="overflow-hidden rounded-t-md">
                <img src={doc.src} alt={doc.alt} class="w-full" />
            </div>
            <div
                class="flex flex-row justify-center w-full -mt-0.5 bg-gray-200"
            >
                <div class="px-6 py-2">
                    <div
                        class="flex flex-row flex-wrap justify-start items-baseline"
                    >
                        <div class="pr-2 font-medium text-xl text-orange-800">
                            {doc.name}
                        </div>
                        <div class="text-xs">
                            {doc.credentials}
                        </div>
                    </div>
                    <div class="text-orange-900">
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
