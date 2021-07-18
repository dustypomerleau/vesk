<script>
    import { contact, expertise, location, refer } from "$lib/points";
    import Card from "$lib/Card.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import LinkButton from "$lib/LinkButton.svelte";
    import Mail from "$lib/svg/Mail.svelte";
    import Pin from "$lib/svg/Pin.svelte";
    import UserPlus from "$lib/svg/UserPlus.svelte";
</script>

<div
    id="cards"
    class="flex flex-col md:flex-row md:flex-wrap items-center md:items-stretch justify-start md:justify-center"
>
    <Card title="Expertise and experience" points={expertise}>
        <LinkButton href="/#doctors" buttonText="Meet our surgeons">
            <Eye />
        </LinkButton>
    </Card>

    <Card title="Trusted by referrers" points={refer}>
        <LinkButton href="/refer" buttonText="Make a referral">
            <UserPlus />
        </LinkButton>
    </Card>

    <Card title="Convenient location" points={location}>
        <LinkButton href="/#location" buttonText="Location and parking">
            <Pin />
        </LinkButton>
    </Card>

    <Card title="More information" points={contact}>
        <LinkButton href="/#contact" buttonText="Contact us">
            <Mail />
        </LinkButton>
    </Card>
</div>
