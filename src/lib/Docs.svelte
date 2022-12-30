<script>
    import { doctors } from "$lib/doctors";
</script>

<div
    id="doctors"
    class="flex flex-col items-center justify-start bg-gray-300 md:flex-row md:flex-wrap md:content-start md:items-stretch md:justify-center"
>
    {#each doctors as doc}
        <div class="wide-card">
            <div class="overflow-hidden rounded-t-md">
                <img
                    src={doc.src}
                    alt={doc.alt}
                    class="h-96 w-full object-cover object-top"
                />
            </div>
            <div
                class="-mt-0.5 flex w-full flex-row sm:justify-center bg-gray-200"
            >
                <div class="px-6 py-2">
                    <div
                        class="flex flex-row flex-wrap items-baseline justify-start"
                    >
                        <div class="pr-2 text-2xl font-normal text-orange-800">
                            {doc.name}
                        </div>
                        <div class="text-base">
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
