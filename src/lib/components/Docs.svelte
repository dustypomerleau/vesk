<script lang="ts">
    import { doctors } from "$lib/content/doctors";
</script>

<div id="doctors" class="doctors">
    {#each doctors as doc}
        <div class="wide-card">
            <div class="doctor-image-container">
                <picture>
                    <source type="image/avif" srcset="/{doc.image}.avif" />
                    <source type="image/webp" srcset="/{doc.image}.webp" />
                    <img src="/{doc.image}.webp" alt={doc.alt} class="doctor-image" />
                </picture>
            </div>
            <div class="doctor-text">
                <div class="doctor-text-inner">
                    <div class="name-creds">
                        <div class="name">
                            {doc.name}
                        </div>
                        <div class="creds">
                            {doc.credentials}
                        </div>
                    </div>
                    <div class="specialties">
                        {@html doc.specialties}
                    </div>
                </div>
            </div>
            <div class="bio-container">
                {#each doc.bio as par}
                    <div class="bio">
                        {par}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .bio {
        margin-block-end: var(--space-4);

        &:last-child {
            margin-block-end: var(--space-1);
        }
    }

    .bio-container {
        padding-block: var(--space-4);
        padding-inline: var(--space-6);
    }

    .creds {
        font-size: var(--fs-base);
        font-weight: var(--fw-normal);
        line-height: var(--lh-base);
    }

    .doctor-image {
        height: calc(var(--space-4) * 26);
        object-fit: cover;
        object-position: top;
        width: 100%;
    }

    .doctor-image-container {
        border-top-left-radius: var(--radius-md);
        border-top-right-radius: var(--radius-md);
        overflow: hidden;
    }

    .doctors {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media (width >= 40rem) {
            background-color: var(--gray-4);
        }

        @media (width >= 48rem) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            align-items: stretch;
        }
    }

    .doctor-text {
        display: flex;

        background-color: var(--gray-3);
        width: 100%;

        @media (width >= 40rem) {
            justify-content: center;
        }
    }

    .doctor-text-inner {
        padding-block: var(--space-2);
        padding-inline: var(--space-6);
    }

    .name {
        background-clip: text;
        background-image: linear-gradient(to right, var(--orange-10), var(--orange-8));
        color: transparent;
        font-size: var(--fs-2xl);
        font-weight: var(--fw-medium);
    }

    .name-creds {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: baseline;
        column-gap: var(--space-2);

        line-height: 1;
    }

    .specialties {
        color: var(--orange-10);
    }
</style>
