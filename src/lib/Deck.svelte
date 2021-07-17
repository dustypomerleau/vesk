<script>
    import { contact, expertise, location, refer } from "$lib/points";
    import Card from "$lib/Card.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import LinkButton from "$lib/LinkButton.svelte";
</script>

<div
    id="cards"
    class="flex flex-col md:flex-row md:flex-wrap items-center md:items-stretch justify-start md:justify-center"
>
    <Card title="Expertise and experience" points={expertise}>
        <LinkButton href="#doctors" buttonText="Meet our surgeons">
            <Eye />
        </LinkButton>
    </Card>
</div>
