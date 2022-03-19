export default async function fetcher(...args) {
    args[0] = "https://healthchecks.io/api" + args[0];

    args[1] = {
        ...args[1],
        headers: {
            Accept: "application/json",
            "X-Api-Key": "QjOgLD7b2yFA3WWjzO1ny40UM7kxk2lJ"
        },
    };

    const res = await fetch(...args);
    return res.json();
}
