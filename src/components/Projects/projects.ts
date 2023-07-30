type Project = {
    picUrl: string;
    name: string;
    description: string;
    github: string;
    furtherDetail: string;
    onlySmartContract?: boolean;
    completed: boolean;
    live?: {
        isLive: boolean;
        link: string
    }
}

export const projects: Project[] = [
    // virtual Launchpad
    {
        picUrl: "/projects/launchpad.png",
        name: "Virtual Launchpad",
        description: "Virtual Launchpad is a decentralized platform designed for VRC Scan (currently deployed on BSC Scan) that facilitates fundraising for projects via token sales. Two types of sales are offered, private and public sale. It employs a customizable token lock system to prevent scams. The platform allows for token vesting for a more stable post-launch market. Users can set specific fundraising parameters. The native token provides users priority access to new launches.",
        github: "https://github.com/JawwadAhmadDev/virtual-launchpad",
        furtherDetail: "https://github.com/JawwadAhmadDev/virtual-launchpad/tree/master/pre-sale#readme",
        onlySmartContract: true,
        completed: true,
        live: {
            isLive: true,
            link: "https://vrcpad.io/"
        }
    },
    // uToken
    {
        picUrl: "/projects/uToken.png",
        name: "u369.eth",
        description: "u369.eth is a public good born with purpose and determination to enhance the safety of the cryptographic digital assets, by implementing a non-upgradeable smart contract to provide you with an extra layer of protection. u369.eth smart contract is immutable. The append-only exception is exclusively to add new tokens. Once a token is added, it can’t be deleted. Tokens and uTokens can be switched back and forth, at will and without permission.",
        github: "https://github.com/JawwadAhmadDev/uToken",
        furtherDetail: "https://github.com/JawwadAhmadDev/uToken#readme",
        onlySmartContract: true,
        completed: true
    },
    // eCommerce
    {
        picUrl: "/projects/ecommerce.png",
        name: "E-Commerce",
        description: `Ecommerce site which is actually a hackathon project assigned to me after second quarter of Panaverse DAO. It is under construction.
        Technologies Used:
        1. Next.js: for Front end.
        2. Tailwindcss: for designing.
        3. Typescript: as a scripting Language.
        4. Vercel: For deployment.
        5. Sanity: as Headless CMS.
        6. Postgress: as DBMS.
        7. Drizzle ORM: for Data Manipulation.
        `,
        github: "https://github.com/JawwadAhmadDev/eCommerce",
        furtherDetail: "https://github.com/JawwadAhmadDev/eCommerce#readme",
        completed: false
    }
]