scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".nasil_races",
        start: "center center",
        pin: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        end: () => `+=4320`
    }
});