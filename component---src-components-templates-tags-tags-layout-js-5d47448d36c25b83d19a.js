(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{trhm:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),r=t.n(n),d=t("P4c3"),i=t("zBF9"),c=t("vOnD"),o=t("LbRr"),f=t("QHR+"),m=t("HJKE"),s=(t("8ypT"),c.b.main.withConfig({displayName:"layout2__MainWrapper",componentId:"sc-1kgz3ye-0"})(["width:100%;margin:0rem auto;display:grid;grid-template-columns:1fr;grid-gap:1rem;padding:0rem;@media only screen and (max-width:","){grid-template-columns:1fr;}"],m.a.large)),g=c.b.footer.withConfig({displayName:"layout2__StyledFooter",componentId:"sc-1kgz3ye-1"})(["color:",";font-size:0.9rem;"],m.a.primaryLightGray),l=c.b.div.withConfig({displayName:"layout2__Gradient",componentId:"sc-1kgz3ye-2"})(["width:100%;height:100%;background:linear-gradient(90deg,",",",");"],m.a.primaryBlue,m.a.primaryGreen),A=function(e){var a=e.children,t=e.location,c=Object(n.useState)(window.innerWidth),m=c[0],A=c[1];return Object(n.useEffect)((function(){var e=function(){A(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.a.createElement(f.a,null,m>756?r.a.createElement(o.a,null):r.a.createElement(i.a,null),r.a.createElement(d.Spring,{from:{height:"/"===t.pathname?100:150},to:{height:"/"===t.pathname?150:100}},(function(e){return r.a.createElement("div",{style:Object.assign({overflow:"hidden"},e)},r.a.createElement(l,null))})),r.a.createElement(s,null,a),r.a.createElement(g,null,"© ",(new Date).getFullYear()," Andrew Weiss"))};A.defaultProps={location:{}},a.a=A},xBWi:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return g})),t.d(a,"c",(function(){return l}));var n=t("xdU6"),r=t("q1tI"),d=t.n(r),i=t("Wbzz"),c=t("HJKE"),o=t("9eSz"),f=t.n(o),m=t("vOnD"),s=m.b.div.withConfig({displayName:"projectListing__GridContainer",componentId:"llvsw0-0"})(["display:grid;grid-template-columns:repeat(auto-fit,300px);grid-gap:1rem;justify-content:center;@media only screen and (max-width:","){h2{font-size:1.2rem;}}"],c.a.medium),g=m.b.button.withConfig({displayName:"projectListing__Button",componentId:"llvsw0-1"})(["padding:0rem 0.5rem;text-align:center;border-radius:2px;display:block;font-size:0.7rem;border:solid 1px ",";color:",";transition:300ms ease-in;cursor:pointer;width:auto-fit;background:transparent;margin:0.5rem 0rem;&:hover{color:",";}"],c.a.primaryLightGray,c.a.primaryLightGray,c.a.primaryLightGray),l=m.b.article.withConfig({displayName:"projectListing__Post",componentId:"llvsw0-2"})(["box-shadow:0px 3px 10px rgba(25,17,34,0.09);padding:1rem;border-radius:10px;text-align:left;transition:200ms linear;overflow:hidden;&:hover{box-shadow:0px 3px 20px rgba(25,17,34,0.1);& .projectImage{transform:scale(1.01);}}.projectImage{width:100%;max-width:400px;height:175px;object-fit:cover;max-height:230px;border-radius:10px;margin:0 auto;transition:200ms ease-out;}a{color:black;text-decoration:none;}p{font-size:0.8rem;margin:0.5rem 0rem;}h2{font-size:1.5rem;margin:1.2rem 0rem 0.5rem 0rem;}small{color:gray;}.read-more{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:0.8rem;text-decoration:underline;color:#524567;}"]);a.d=function(){return d.a.createElement(i.StaticQuery,{query:"3910403769",render:function(e){var a=e.allMarkdownRemark;return d.a.createElement(s,null,a.edges.map((function(e){var a=e.node.frontmatter,t=a.slug,n=a.title,r=a.category,c=a.primaryTech,o=a.date,m=a.subtitle,s=e.node.frontmatter.featuredImage.childImageSharp.fluid;return console.log(s),d.a.createElement(l,{key:t},d.a.createElement(i.Link,{to:"/projects"+t},d.a.createElement(f.a,{className:"projectImage",fluid:s}),d.a.createElement("h2",null,n),d.a.createElement("p",null,m),d.a.createElement(g,null,r),d.a.createElement("small",null,o," | ",c)))})))},data:n})}},xdU6:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"News Reader","slug":"/news-reader","subtitle":"News Search Application","category":"News & Entertainment","primaryTech":"Vanilla JavaScript","date":"3 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAACtElEQVQ4y61T20uTYRj//oguuymkIKjofhHUVREVBUEU3ag5t+nUObGZbmg13Kab0+kOoGnJMulgzA7qHLoDc1riZCo7iIfldE5YomV4+PU973JXddcLP36/5/c97/M+z/e9H7e/v49DuN1uhEIhJJNJbGxsYHd3N4u9vT2GQ721tYV0Oo3t7e2sf3BwAE6v16O5uRkWiwUajYZpo9GIlpYW5rW2tjI2m81oa2tjIM9kMrEcyqdnFDc1NYErLi5GeXk56urqUFNTA7VaDaVSiaqqKsaVlZWorq5mMYHylColVCoVg0KhyHh8rlgsBieXy0EoLS1lKCkpgVQqRW1tLXQ6HRob9aApDAYDrxshkUggEolQVFTE8gikqTHamy1YUVHBmLotKytjndIYNKLVaoXNZmOj0qHSP5tlMlm2EebzxTk68fAUAsWEvLw85ObmoqCgAPn5+UyTJxaJWYc0HoG0UChEYWEhY258fJx93bGxMZD2er0sDgQCmJiYgN/vZz5pn88Hj8eTzXO5XIwpJp80h/+8OLpD/1qJ1TXEYvNYWlrG/MICwuEwFnne3Nz8az67hyRS60mE54KIROYQ/BKAe3gQkzynEstYmg8jvhjDpHcU6e9prKdS+Laygmg0hpXEKlbXkohEo/zrCGBn51emoM/jwkP5A9y5L8TNSwKcO5WDu7euIDjqQF/Pc3TyF/fJ/Xvo6e1DaC4Kt8cLW3sHPn52YtA5AnvPWygeSRCPRzIFvw68g+zaBXBHzuD25as4eyIHR4+dhJ/3n/F/g0BwHaePn8dFwQ10dL2Ba8SDF/aX0DYY8FStxfv+IbRb6pGIRzMFl2en4Oi04HGDGfaubhi1Wuga9JiZnkJvtx0arQmaeiscfIdOxwCCU0EMOYfR/+ETXvW+xnRoBsHgLH7+2MFv09sUP9WAHhkAAAAASUVORK5CYII=","aspectRatio":1.5957446808510638,"src":"/static/aaae5872a8709b94291849738d193f6e/630fb/featuredImage.png","srcSet":"/static/aaae5872a8709b94291849738d193f6e/5db04/featuredImage.png 75w,\\n/static/aaae5872a8709b94291849738d193f6e/6d161/featuredImage.png 150w,\\n/static/aaae5872a8709b94291849738d193f6e/630fb/featuredImage.png 300w,\\n/static/aaae5872a8709b94291849738d193f6e/62b1f/featuredImage.png 450w,\\n/static/aaae5872a8709b94291849738d193f6e/2a4de/featuredImage.png 600w,\\n/static/aaae5872a8709b94291849738d193f6e/2e5c9/featuredImage.png 2776w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Dictionary App","slug":"/dictionary-application","subtitle":"Educational, Vocabulary-Building Application","category":"Educational Game","primaryTech":"React","date":"14 days ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAACUElEQVQ4y42S/WvTQBjH+y+JUkF/GcKmrs6xiRRhRRQEEXybUBlWV2ZVNqgTnRO1YnGiIir4g7+4KWxr3WZ10Bbn6HAqVdusafO2NE1yyddL2sxmA/Xgw3O5e+6T5148bfv2o+dKAIGLPTgcPII9Zw5he99RtAz0YsdQCK03LqP1dhQdsWF0xq7SGEX3/evoit/C3ngMXWNxdNwdxYE71+CL34NHmPNDnN6MyqQX7PRWVKa84Bzot4tkC/i5TvAfAxDSxyBkeymn7cg3osc0AYMQmERroNuRaCp0rWZDdNXGMAwKQIgJk3bquW481iSxktZRqfBgWQ5smQNTZFAqMFgpllDI58HRMUdMDDdUaKAZqwpV1bGUW0Ymk0E2nUZ26SsWS2V8Y/PI/Cojz/HQdWLnrl/vMajVwUqy2odUGls2tWH3rp1o9/nQffMJwokx9E08hP/FOxx8/gqfmYqdq9tF/HG4hJqm20nj429x4njQ7tc0ApWes0lqUDTTHjs58R7JPPNvoVPhTCKHyIWnENUaWF6EJMngZIX2OUhVGaPP3mBh+WddqP+HcDbxBSPRSTitSlEoMr0Iq8bzr+eR+l74e4XWgWpaXZiYmsc2bztC4X48joRhjAxAnQlCz51CdSEI/6MHmP1RXhOSJqmrQmvCagxTRDQ6hP7IJSSHB4H4IJRsCLXcOeiLZ5H69BKMTH9umi7ZhgqdqKra2nZVCm9B9y1QeJmOVelFKYr9DpvXbhA6WGcpihJ4XoBIWRUESCJFsiKPVVluXEbz+617fgO1baK/jMLRMgAAAABJRU5ErkJggg==","aspectRatio":1.5,"src":"/static/12e51c85db12a1bd0a3bf409085a0f8c/630fb/featured.png","srcSet":"/static/12e51c85db12a1bd0a3bf409085a0f8c/5db04/featured.png 75w,\\n/static/12e51c85db12a1bd0a3bf409085a0f8c/6d161/featured.png 150w,\\n/static/12e51c85db12a1bd0a3bf409085a0f8c/630fb/featured.png 300w,\\n/static/12e51c85db12a1bd0a3bf409085a0f8c/62b1f/featured.png 450w,\\n/static/12e51c85db12a1bd0a3bf409085a0f8c/2a4de/featured.png 600w,\\n/static/12e51c85db12a1bd0a3bf409085a0f8c/aeee6/featured.png 2701w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Film Reviewer","slug":"/film-reviewer","subtitle":"Search For Top Movies and Share Your Film Reviews","category":"News & Entertainment","primaryTech":"React","date":"4 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAACToAAAk6AGCYwUcAAAFJklEQVQ4y4WUaUxVVxSFL2rBpD/aNK0IyAOZIxhtKi0qCs4DoCBQROExCcigNhVRUahM8hCQQZRIhQgPlMEGi2iq1VaM2ihaGxQsMshQB3iAzAKCXy8PSv1h2pus7J1z11ln5Zy9t6A3Ww+JRIKenh6GBgYYGxljYmyijEaGRujrG2BtZY35AnM0NDTR19PHQP8dnrExhoaGGBkZMX/efAQ1VVUEQfhPjImMbfg/3rSp0xBsbWwJDgrC398PD6kUqbubCHcxF+EhxdvbC9fNrjg7OeHj401gQACe4rrnBNdjAv5+vthvtEfIOX2a0ZE3KBRtDA8P8b4vOyuL1OQ0Zd7T3UVbewf9A68n/7+diGVlFxDiwj0pyIrlRWsHl84VI/smmFMxEUQEB9FYX8eLntdExaewJdAH+a+VHM6+ysnjGZw/c4pdATYE+tuwc/s6vnZezRdffYmww28NsQelKDp7kWekk7rLk5LkQ+zbsonHVY+oftbO3ggZFvaWHLt2h9Siu+zx2kyQ20aszD7G2Xktdu5eGC+x5EPNjxCk9mvIyEthUDSempjAQhMDHCzM+dzYkNraWh4+rGSX/3act7qSUVhKuvw8m1ZbscxEE8f16whJPkdAQgnSw3lYbHBEcHVxofCHLPEGRoiMiUNrtgmWVmvQFGNTYwOXbtzDwcmTuWamLF2xEr8du1losRDTT1Qw11Fnw1Y/1jq6kZR2ggWWVgiB0ekUPOpjaKCX/Nv1bEq/iVvmb3hk3eW5ooPK531sj0jGYaMtB6IPIs+VU3j2LLKYKBITE8krKOb77FxKfyzB3csDIUEWx4uWRqqrHlJVU8cfT5p5UNPEgz+fUl1dTUNdDdGHvuNYWhqX79dSVvmShMJyblVUKl92oK+P/r5eZV5cVISQmpJCX38fLc3NKNqe0dpSw8umaro6mnj+rJmOjg5iY+PEskkmueAavpEnWR6aRXTheYb6uqmpqaGhvl4pmCeXIyTKYnh65wpd7Z3is7RQUy7jeqYnw51yBgZ6GFFcRxa6nvj4JEpvVRAR6MHBlFyKbj+gv7uTuro6EbXKaszPy0NwdHBiT3AA7YpXDHbf4m6eM7+k2lBVFiA6FwXb8kncOw/ZkWNEycL51s+b4zGhlP50ntdicbc0N/Gqs0PpUJ6bixDia0Pm0Z28VHTR2XiR8uwgbsjDKM/cRk9XG11NFwjdZk3S0XRO5BwlInIH8VE7KbmQrxQZGnzNm4kOy83JQViy2Jr0qP2im0Hqb+ZQEraM4n02lEXa8qq1iSdVFbh5+RAXG8vIyAit7W2TrTYituzo6AhDQ+NtONbGgp1fOKlXnjI6MMC5qxW4hGXiKyvA/8gZ2lsV/P60iw0B4STGxjDU209zbb14NT286R8QFUfHVHk7NDz+KKdFh3ai/QPNV4l8KFb8/Qusu16C3Y0SbK4UEVJRwMGGi9jvD8IpxJeIulJC7+Wz+46csMpiwh+XkFL/M7LHZcT+dRmXpD0I6ovmoCVdir50FQZu1hh6WmHsvQyJkzn6HiuZsWUxpqvEzlhuwaeui9CVLmem8yIkYtRys0J/6wrm+KxHQ2qF+tK5CNMEFeVwVHnPwFQTpijjLHVNdLS0lfnU9w3WyShqqalNR1BRQWXKFNTU1FCdwAdjk1xl/DBtbQm6urPHDxZ5qmqqqE7/l/sPb2y/oDlTEy0NLbQ1tdHR1kFXoqvEWC6ZJUFjhgZmc8wwMzVD/TN1tLXe5elM8mZpzVLq/A0z6wSKlBMxRwAAAABJRU5ErkJggg==","aspectRatio":0.9615384615384616,"src":"/static/236a747b1686098ff9500de46ddbe8cd/630fb/featured.png","srcSet":"/static/236a747b1686098ff9500de46ddbe8cd/5db04/featured.png 75w,\\n/static/236a747b1686098ff9500de46ddbe8cd/6d161/featured.png 150w,\\n/static/236a747b1686098ff9500de46ddbe8cd/630fb/featured.png 300w,\\n/static/236a747b1686098ff9500de46ddbe8cd/62b1f/featured.png 450w,\\n/static/236a747b1686098ff9500de46ddbe8cd/2a4de/featured.png 600w,\\n/static/236a747b1686098ff9500de46ddbe8cd/6ce67/featured.png 1610w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Pixel Images","slug":"/pixel-images","subtitle":"Photo Sharing Social Media Application","category":"Social Media","primaryTech":"React","date":"2 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAADg0lEQVQ4y02S+U/TdxjHv9l/4Q/Lsh8WftkP/ma2LDPZjFOZzojDmjhhSDk2l41MAW8OEYQCgsA6xqGsC8WWTo4OajmKXDpkGWI5WmihLaVVoGAPjh6vfalZ4pM8+TxH3vk87+f9CLm5uQwPj/BqZQ3HkpPNzQA7O0Hx3SIYDPG2bQb8Ym+H1dVVXnu9mM1mPB5PNHc4HKyvryMcOPYN6Rk5dHYbWHIu4/N5CYhAv98fjadnrShbe2lo6qRI1oBOP8TsrBndIwO2RRtWizXqMzMmzKZ5BOGdPRw5niAmJqxWS/Qn2+ICziU7moddHDyaxoHYdD47nMb+g1JaVF3Mz1toa9fhWfNgtztYWLCJeAuTz6cR2tq7GH0yJk7kxbO+gdvlxr3iwR8I8MJoIq9Qzq2SOmrrWpk1LRJ+awWhUCTqu2y83l1mWwgutwvL7Bzjz6awzBhZWHIRcll4PjaMvkfHonU+CnY5bTgWTcyPG5gcH8XttPDq5ZI47RSejQ3WPGssizWhoKiI2qxLyBKldN2vYcrqwNfTSOnPycTGfUllfjaWp/2UVRRzOfs8tVfPkpeZhlxewsQ/A1RX36Kp9SHdAwZyriYjhMJhQttbsLNNSFQ3En5DKhwJ4fUHxGBX6YjYD7HtC7Ah1rZFpf+3SDjChk8UcWsrmgv18mpqa8opuJJBz+BjfMEdbEN6/h0Zo7NLS4tGTW+nFo1Ip2n0Mc0KFWr1AwbEdYxb7TzoUHO3rBBV8+/U5JcilJYUca9OTuHlDNq0HdhfunltGMLYradXr0WtUWLQPUIxPcFvXe380aRC2dxMm1rDM/syKp0GWXERrS0q8n+6grA7ZnHFXZIys7jTqyerspLE5CRu11dx58+/yK9XUF4lp6O+BmV/N0rjOCGnmsBcOR5jFba/K1h5IWPNrHhDeTsS4evMbN6P+YAPz5zio9Nx7Il5j09OSTiRfZN9JxNIPCfl5g+JxNeXcVKrxDtxDc9TCcO/SqhKOcQTZSzm/nTxhMII4VCQ+PQk9n26lyNnPkeSmcKh4x8jOX2UC6Vy4r+/yMXUZOryMjmvbOR6nxafMQ/34DkU1yTUZMQx0niYub6LBEU9hbCoYmp6Au/ujeEr6RfkyKScTdjPt8knKKht5kKejBvfpXI/O43b935BMdiHb7KQ1dEUskt+JP+6lLGGY1gNNxBvnP8AwOkxvWWqyxAAAAAASUVORK5CYII=","aspectRatio":1.5,"src":"/static/92690c1ecfe61d79c3aff5dfc52b2f19/630fb/featuredImage.png","srcSet":"/static/92690c1ecfe61d79c3aff5dfc52b2f19/5db04/featuredImage.png 75w,\\n/static/92690c1ecfe61d79c3aff5dfc52b2f19/6d161/featuredImage.png 150w,\\n/static/92690c1ecfe61d79c3aff5dfc52b2f19/630fb/featuredImage.png 300w,\\n/static/92690c1ecfe61d79c3aff5dfc52b2f19/62b1f/featuredImage.png 450w,\\n/static/92690c1ecfe61d79c3aff5dfc52b2f19/2a4de/featuredImage.png 600w,\\n/static/92690c1ecfe61d79c3aff5dfc52b2f19/f1f3a/featuredImage.png 2710w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Olaf Community Kitchen","slug":"/olaf","subtitle":"A community kitchen application for selling and purchasing takeout food","category":"E-Commerce","primaryTech":"React","date":"7 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAADZUlEQVQ4yy2TWW8bVRSAR0FtcLyM1xmP7fF43x0v4zheEttJDKlJ4mwkpSEbpElDQ1EQRNCqUHiBl6pqhcgLtJWQitgekSgCXhBU/KuPS8XDebjSved+55zvSEXdghl34/d60TUfecNPJqyRCioYqoeQVyadiJBPx0kYQTxOmUhQRXXZCWkKkYBK0OsiGQ7hsluRcuJxIxunMZ5nophlvpZjrlZiYOboVfLofg82m4XJtkklrVOO+0gqMsWAE8PvJKq6yAYFSNhPwC0jvdKcYLHT4uTVPnuDJnv9KrtzInrjTJUzaIJaEySBkKDx2emYfmpFB0ltlLRHhCYT9jhIB3wYihtpZ3XIwdYaf9w74Nc7S/xw0ua7txo8PmxSNTzksil0UaLX7aBouOkWfVSrDsyahblWhUZMIeEdQ3WMCUIH0usbG88T/v75FZ6ezfDT8SRPDky+3jUpaA5BmWJ/pYuuKMyaWWaqCQoRhUJc5uP1KMflC5hhUYVswW0dRdocLnK0s87fd7d4+n6PJx9s8c3NXR7f2md3fYlruxt8erpPf7rNfK/Lwf42Z6c32Bwuc3u7yyA6wvJ0nbzuw3ZxBGm+M8Xh1grP7r/Jnx/1+fZqg0d7dc63J5hMhTCLeeabDWbrJv1WnZPjfRb6XXqTFdYEjJkIsWQmyGguAi4b0uWFBU4Pd/jny+v89ck8P141+epygftrGQpBF9VMks5EBTOXZqHX5vz8C9qVMtOVAoNui0oyTEx1UxC6ZUN+pPeuHXHn7B2enZ/w24czfH9k8mA5zt3VLOWoKhyMoSkedHG5lEvxckuQNqMsdKrUMlFKcYOEJoani4S6hnT79JSz6wf88tk2P98UhO92ePhGmXsbRfGrIhy0oSpegkLgeDxGXOjTLCnUE5qYroNMSCWhOoU2XlIBBenWjbdZH15ibzjD3sos25emWOvVuDLXoJyKceGFEXQ9hBHW0cU2RIVC2YCbqUQA1XqRoNNCzCcTFbIH3Xak1dk2E+U81fECtVKJXqPJdKsj+jUnyprCahnFOvYismwnEgmRFL0qRzVKhorfaRXJXRgeu5Db/vws6W6r2Ecf5UKBTrPF5tI6i4Nlhi8NeG0woCcmrItNSYQDtMpZWsLFupj+f0lrSV3IrhL5n84v2/gXp2OpltOSAXcAAAAASUVORK5CYII=","aspectRatio":1.530612244897959,"src":"/static/2461b34762a7f525cb94e132f0167d21/630fb/featuredImage.png","srcSet":"/static/2461b34762a7f525cb94e132f0167d21/5db04/featuredImage.png 75w,\\n/static/2461b34762a7f525cb94e132f0167d21/6d161/featuredImage.png 150w,\\n/static/2461b34762a7f525cb94e132f0167d21/630fb/featuredImage.png 300w,\\n/static/2461b34762a7f525cb94e132f0167d21/62b1f/featuredImage.png 450w,\\n/static/2461b34762a7f525cb94e132f0167d21/2a4de/featuredImage.png 600w,\\n/static/2461b34762a7f525cb94e132f0167d21/b6cf1/featuredImage.png 2705w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Forum Company Website","slug":"/forum-website","subtitle":"Company Website Built from Scratch","category":"Company Website","primaryTech":"Bootstrap","date":"5 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAADbUlEQVQ4yxWS2VfaVxSFf6amDrEqmooRBQQWIAiCgDKoBFFQ41DihEqsE7VOoHWASiAiSrQ2xtpobWuy+tD/8+vtw7fuXedhr733OZJKq0SlbKS+/AkKWQXtrS/oc5iwal7gbNNg1igwaZpxiH+nQYmvL4A7PIalJ4DDF8ApsLn96KwulG12JKO+FYtOgVr2NU3flNJcU4pF/S29HVoCdj29Vg1WbRMWlQy/t4ux13MMjk/jCU/gHBile2AMpd1HldZKmdqE1KtvIGiSY2uqxNxQTpugQ1HJsE3BjFfDpEvJRLeR9O4WD3/9w+3dZ44LH0hmL9l5d8X0bo7RtQPskRV0wUkkk7wCq6KKNvGaGytxtFTRpa7Gra3Fb6gTPCfcoWJ1IUrhlxvOb/4gf3nL6dUnIXpB/CDPyuEps4ksPYtJJKeqFnXtU7R1ZZjl5UJIhkdbQ9jWRLBdjt8oE4JyMasnFOhneS9D4viMyPo+vugPROL7DH2foGd+E39sSwiqa/AY5IRcBiL+TuLTI5ym90XEBBuxORbHQ8yEepgM+jjY3iX17j3Jt0XW0wV2hMONVIHhtT3aIksoB6eRHGoRy6wgGnKTTmxzlNzl+sNvHCaS5I5S3IvecidFNuJbnOffc//4L1e3f5PIFFnby+KfjROIbdAx8YZyZxDJpWvEpapmaiDASbZIJp1lfztJanuHVHKPTw+fubt75CiVZWFyhnSuSGz9JzZTeUJz66j84zR0h6nu8PPU5EHyGZvx6RUMiXvKZs54+PMLp8Vfia3uMD67xHdLG+z9XCDz7pLFlR26+8dodbxE7Q2j7htF4R2m0ubnWWeAyvYeJK+uAWtLPSMvh1iYW+GseC1cfeHi4z2vFuI4QxFG5+NMLPxIeGoFo2cAc+8wdRYvz2291P8vZvFRafdT7RpEClmUtDWKTfYMsByLszS3TCZ/wY2I+bb4kf3jc0aja0J4iq7hKJ6hGbRdQWSmLsp1Nsp0nTwzuqgwuSkxdiG9sjQx6LCzLwrOZQpEX0c5TJ1w+/sjBXFvb7ZTwtky7pGoYB6z2GSdiFdtdlOm76TM4KBUY+GJoETdjuTWNxMRDjYPTsmcXHGUuyQlyBdvyJ1dkxXEdzPMru7SPRajwTtCrbNf9OWhzOjgq1YzJS0GpBY9UqOG/wCkd+VRfOa2cAAAAABJRU5ErkJggg==","aspectRatio":1.5957446808510638,"src":"/static/5a1e85736df1e18aaea02a881d6c0fb9/630fb/featuredImage.png","srcSet":"/static/5a1e85736df1e18aaea02a881d6c0fb9/5db04/featuredImage.png 75w,\\n/static/5a1e85736df1e18aaea02a881d6c0fb9/6d161/featuredImage.png 150w,\\n/static/5a1e85736df1e18aaea02a881d6c0fb9/630fb/featuredImage.png 300w,\\n/static/5a1e85736df1e18aaea02a881d6c0fb9/62b1f/featuredImage.png 450w,\\n/static/5a1e85736df1e18aaea02a881d6c0fb9/2a4de/featuredImage.png 600w,\\n/static/5a1e85736df1e18aaea02a881d6c0fb9/202aa/featuredImage.png 2640w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Weather Forecaster","slug":"/weather-forecaster","subtitle":"Check the weather forecast for a location near you","category":"Science and Technology","primaryTech":"Vanilla JavaScript","date":"5 months ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACToAAAk6AGCYwUcAAADcElEQVQozx2Se0zVZRjH34NTuQgH0FByWqB0sQJFIIjrCbloKxgQiBTOo4nKJWzkBAUcLJNShh30aIIKAyxuZwfljCJlYgnEzcOdgyCXc46AMP5ordY/n37zj8++e5+9+zzPnj1COCVg9frnbHY/hrN7Glv9slmz+QD22w6SefoKZwrKySmoJP9CHWmnK4g/8gM+kfkIp2QsXzuC41upbHovHblrMjLnBMTB9MvsUZbgnpCPV2IWHon5uEYX4hZTiKeyDL+jVwk9XkR0Rjbx6SnEnjjMvsOH8I8/QFBiEqGfJRGQdJytUd8RoSxFGM3P+V3fTE7jtyRXV3CmIYfI230ElE3ipZ4i+HoPX94pJEPiVG02BY0pXGxK4lpLHCpdIqrmOEru7SdXc4p0TQtCVZvBN1VRfN+4n7y6NJQ1d4muMhN5a5aPKuY4p/2RW79+weXmLIp15ynR5VLcfFYSnqSiVapr46l5kMfERCeP9E2Is9WfUNQQxfn6T0m4eQPP0mEU19oIUD/GQzVOoJQh6odk1WSi0ihIrcrDp7QHxdUWvqo+Se5PSVxqjEGtPYe64Q6ifaSXzoEmdL09VHWY+a2vnT/092jrv8/PXc+o7jRR2bHIL32d/DmoQdM9Rn3/CtqBRer6Fngw3E/PuI77+laaOh8htNp2PH2VhIanEBZxCIWUwWGpKCLSCdt77CXhEorITALDv8Y36Cj1ja0szC/w77wRo2GA0efDLJtnWVk2I4rVDQjrIBy3xUjEScRi7xqDw8uMk84nHoftCThK2LnEIhz2UXSjltH5MZYWzZgMfcwNPWZ+egzj9ATiUnE5QmxkjdW7iNU7kFm6Y7PeF7lTIPabQrDbGIKw8ZXwZ7V9EELmzc2qJqaWupmbGWT5xSTTQx0YBruYeWaQhCWVktBFkr2NWOuBhY0Xq2y9sd4QiPUrwaySf4DM1h9hG4CFXBJaeFNeeZcXK9OY5saZN47x5Gk3kyMDmIaHEBevVEuf3sQt5ATWzsGSdAdr7Xdj5+SHrZMvMptdUhNP5M5BrN/yodR4J2W3Nfzz1woL5hlMs8MYnuoxTI2j72qTJpT2IRx98FeqkG//GGH5DsLKA2eXPWzYopDeO5Gt282rbnt5Y5e0w3Xvc72igb//W2LaNMrE3CBPRh4yY5xgcrCX/wGWVkCaUQjmEQAAAABJRU5ErkJggg==","aspectRatio":1.6666666666666667,"src":"/static/32a09044c107c17c3c3775e72f029dda/630fb/featuredImage.png","srcSet":"/static/32a09044c107c17c3c3775e72f029dda/5db04/featuredImage.png 75w,\\n/static/32a09044c107c17c3c3775e72f029dda/6d161/featuredImage.png 150w,\\n/static/32a09044c107c17c3c3775e72f029dda/630fb/featuredImage.png 300w,\\n/static/32a09044c107c17c3c3775e72f029dda/62b1f/featuredImage.png 450w,\\n/static/32a09044c107c17c3c3775e72f029dda/2a4de/featuredImage.png 600w,\\n/static/32a09044c107c17c3c3775e72f029dda/aeee6/featuredImage.png 2701w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}}]}}}')},xpsq:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return m}));var n=t("q1tI"),r=t.n(n),d=t("Wbzz"),i=t("xBWi"),c=t("9eSz"),o=t.n(c),f=t("trhm");a.default=function(e){var a=e.pageContext,t=e.data,n=a.tag,c=t.allMarkdownRemark,m=c.edges,s=c.totalCount,g=s+" project"+(1===s?"":"s")+' tagged with "'+n+'"';return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,g),r.a.createElement(i.b,null,m.map((function(e){var a=e.node.frontmatter,t=a.slug,n=a.title,c=a.category,f=a.primaryTech,m=a.date,s=a.subtitle,g=e.node.frontmatter.featuredImage.childImageSharp.fluid;return console.log(g),r.a.createElement(i.c,{key:t},r.a.createElement(d.Link,{to:"/projects"+t},r.a.createElement(o.a,{className:"projectImage",fluid:g}),r.a.createElement("h2",null,n),r.a.createElement("p",null,s),r.a.createElement(i.a,null,c),r.a.createElement("small",null,m," | ",f)))}))),r.a.createElement(d.Link,{to:"/tags"},"All tags")))};var m="1439187583"}}]);
//# sourceMappingURL=component---src-components-templates-tags-tags-layout-js-5d47448d36c25b83d19a.js.map