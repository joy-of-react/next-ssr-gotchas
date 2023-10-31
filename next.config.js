/*
  This configuration disables React's "Strict Mode" for this project.

  As we learned in Module 3, Strict Mode helps us find subtle flaws
  in our code by turning them into glaringly-obvious problems. This
  is a good thing! So why on earth am I disabling it??

  Here's the deal: in this lesson, we're exploring one of the biggest
  gotchas with Server Side Rendering: we can't access the `window`
  object on the server. The most intuitive solutions to this problem
  involve conditional logic, but that conditional logic often leads
  to hydration mismatches.

  I want us to focus on this particular SSR gotcha. And it's easier
  to focus on that problem when Strict Mode isn't surfacing *other*
  problems. 😅

  In this same lesson, we learn about a “Two Pass Rendering” strategy.
  This is the strategy I actually recommend using. It's fully
  compatible with Strict Mode. You can see the code here:

  https://github.com/joshwcomeau/next-13-ssr-gotchas/blob/final-solution/src/components/Counter/Counter.js
*/
module.exports = {
  reactStrictMode: false,
};
