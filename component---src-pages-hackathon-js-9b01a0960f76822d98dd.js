(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Bl7J:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),r=t.n(n),i=t("P4c3"),d=t("vOnD"),c=t("LbRr"),o=t("QHR+"),s=t("zBF9"),f=t("HJKE"),l=(t("8ypT"),d.b.main.withConfig({displayName:"layout__MainWrapper",componentId:"ii2kc2-0"})(["max-width:90%;margin:0rem auto;margin-bottom:3rem;display:grid;grid-template-columns:3fr 1fr;grid-gap:1rem;padding:1rem 0rem;@media only screen and (max-width:","){grid-template-columns:1fr;}"],f.a.large)),A=d.b.footer.withConfig({displayName:"layout__StyledFooter",componentId:"ii2kc2-1"})(["color:",";font-size:0.9rem;"],f.a.primaryLightGray),p=d.b.div.withConfig({displayName:"layout__Gradient",componentId:"ii2kc2-2"})(["width:100%;height:100%;background:linear-gradient(90deg,",",",");"],f.a.primaryBlue,f.a.primaryGreen),m=function(e){var a=e.children,t=e.grid,d=e.location,f=Object(n.useState)(),m=f[0],u=f[1];return Object(n.useEffect)((function(){var e=function(){u(window.innerWidth)};return u(window.innerWidth),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.a.createElement(o.a,null,m>928?r.a.createElement(c.a,null):r.a.createElement(s.a,null),r.a.createElement(i.Spring,{from:{height:"/"===d.pathname?100:150},to:{height:"/"===d.pathname?150:100}},(function(e){return r.a.createElement("div",{style:Object.assign({overflow:"hidden"},e)},r.a.createElement(p,null))})),t?r.a.createElement("div",null,a):r.a.createElement(l,null,a),r.a.createElement(A,null,"© ",(new Date).getFullYear()," Andrew Weiss"))};m.defaultProps={location:{}},a.a=m},"j/+2":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("Bl7J"),d=t("ugEu"),c=t("Wbzz"),o=t("HJKE"),s=t("9eSz"),f=t.n(s),l=t("vOnD"),A=l.b.div.withConfig({displayName:"hackathonListing__GridContainer",componentId:"sc-1rpukkk-0"})(["display:grid;grid-template-columns:repeat(auto-fit,300px);grid-gap:1rem;justify-content:center;margin-bottom:2.5rem;@media only screen and (max-width:","){h2{font-size:1.2rem;}}"],o.a.medium),p=l.b.button.withConfig({displayName:"hackathonListing__Button",componentId:"sc-1rpukkk-1"})(["padding:0rem 0.5rem;text-align:center;border-radius:2px;display:block;font-size:0.7rem;border:solid 1px ",";color:",";transition:300ms ease-in;cursor:pointer;width:auto-fit;background:transparent;margin:0.5rem 0rem;&:hover{color:",";}"],o.a.primaryLightGray,o.a.primaryLightGray,o.a.primaryLightGray),m=l.b.article.withConfig({displayName:"hackathonListing__Post",componentId:"sc-1rpukkk-2"})(["box-shadow:0px 3px 10px rgba(25,17,34,0.09);padding:1rem;border-radius:10px;text-align:left;transition:200ms linear;overflow:hidden;cursor:pointer;&:hover{box-shadow:0px 3px 20px rgba(25,17,34,0.1);& .projectImage{transform:scale(1.01);}}.projectImage{width:100%;max-width:400px;height:175px;object-fit:cover;max-height:230px;border-radius:10px;margin:0 auto;transition:200ms ease-out;}a{color:black;text-decoration:none;}p{font-size:0.8rem;margin:0.5rem 0rem;}h2{font-size:1.5rem;margin:1.2rem 0rem 0.5rem 0rem;}small{color:gray;}.read-more{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:0.8rem;text-decoration:underline;color:#524567;}"]),u=function(){return r.a.createElement(c.StaticQuery,{query:"1648214078",render:function(e){var a=e.allMarkdownRemark;return r.a.createElement(A,null,a.edges.map((function(e){var a=e.node.frontmatter,t=a.slug,n=a.title,i=a.category,d=a.primaryTech,o=a.date,s=a.subtitle,l=e.node.frontmatter.featuredImage.childImageSharp.fluid;return r.a.createElement(m,{key:t},r.a.createElement(c.Link,{to:"/hackathon"+t},r.a.createElement(f.a,{className:"projectImage",fluid:l}),r.a.createElement("h2",null,n),r.a.createElement("p",null,s),r.a.createElement(p,null,i),r.a.createElement("small",null,o," | ",d)))})))},data:d})},g=(a.default=function(){return r.a.createElement(i.a,{grid:!0},r.a.createElement("h1",null,"Hackathons"),r.a.createElement(g,null,"I love leveling up my skills and exposing myself to new technologies. Joining in the MintBean hackathons has been a great way to do this as well as meet and learn from other developers new to the field like myself. Checkout some of the projects I have built in past challenges."),r.a.createElement(u,null))},l.b.p.withConfig({displayName:"hackathon__Paragraph",componentId:"a6eocg-0"})(["color:",";padding:1rem 2rem 3rem 2rem;max-width:900px;margin:0 auto;text-align:justify;"],o.a.primaryLightGray))},ugEu:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Interactive Piano","slug":"/interactive-piano","subtitle":"Play the piano from your browser!","category":"Music & Entertainment","primaryTech":"Vanialla JavaScript","date":"21 hours ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACToAAAk6AGCYwUcAAAB90lEQVQoz31TSWqyURD0NnE2ccZZSZwSBxyCA1mZW3gHNxIXIlFRETVGjxDwAJ5CzcoxW6lQDZ8k+eFfFK9fdb/q6ve+T2WxWGA2m8GVuL6+vuDm5ubCMSaUHM8QVqsVWq0WqVQKgUAAKkVIKSDp9/tlDYVCiEaj8Pl88Hg88Hq9kiNvt9ul3mazXQSZU/10R9ze3iIYDCIcDuPu7k6EuKcoD5AnFEE65DmTySR7cchRjEajEEwYDAZZCTqgKHN6vR4ajUZqlWtg/NOQiqTb7UYsFpOuTqdTnBUKBYkVZw6HQ5w9Pj4K73K5BPF4XMQvgpy/Uqng/f0dkUgEyWQS9Xodx+MRmUwGpVIJ+XxeGjabTRwOByQSCZTLZcHb2xuurq5kdBmZgs/Pz5jNZnIonU7j5eUFp9MJuVwOT09PKBaLuL+/R6vVkkZ8APLEdDoVQV6NCPJOKDiZTGQ8jlur1fD19SUNstmsuOarNxoNacQa8pzgH0GdTiedlssler0eBoMBPj4+sF6vMRwOpdFoNEK/38discBqtZKa8XiM+XwuNWq1+rcg74J3w3GI3W6HzWYjMR0p/Ha7xefnp8T7/R7n81ka/hLksz88PIi719dXQafTQbfblbjdbgv+8gSdVqtV+Zwuj6J8h3TKxP/wt4Z75TtU/rRvISL1ChtUjrcAAAAASUVORK5CYII=","aspectRatio":1.7045454545454546,"src":"/static/3df15694f1dfb2a518875f0900c2f394/630fb/featured.png","srcSet":"/static/3df15694f1dfb2a518875f0900c2f394/5db04/featured.png 75w,\\n/static/3df15694f1dfb2a518875f0900c2f394/6d161/featured.png 150w,\\n/static/3df15694f1dfb2a518875f0900c2f394/630fb/featured.png 300w,\\n/static/3df15694f1dfb2a518875f0900c2f394/62b1f/featured.png 450w,\\n/static/3df15694f1dfb2a518875f0900c2f394/2a4de/featured.png 600w,\\n/static/3df15694f1dfb2a518875f0900c2f394/76066/featured.png 3040w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Oscar Films Review","slug":"/oscar-films","subtitle":"Learn More about the 2020 Oscar-nominated films","category":"Art & Entertainment","primaryTech":"Bulma","date":"3 days ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAACzklEQVQ4y5WS229MURSH50/w4AnxILxR9KFERCOteNDSVluESISXuoQEIRLxgESaJiKUVogOWpdq0brE/TZK3NKJVik60+hFpzPnnH1uc5/PPmcqGk/s5MtZ+7f2WnudtZfnZk+Atifv+DggCIoMfUqSPjXlEpD0aymC/4Fn9lnBvPM6eV7B/PPS9mZZIO3cc4KZZzRmSXLO/hueybVOIoP8RoOCSwZLLpssbjJc8rw60+sF0+oEk08IptSOR/trn8WzqlWhskWhoiVCxTXJmO1ojm/N9QirWyOskpqzH0+lG/vnrINH00LoegTTVF0MQ8HQFVdzsG2BbWkYjm9M040ImpAxhoolffaYT5W5PKo2imHpjCohRsLDqDLZj4Eglm1x63Y75WVl7DxQw55DR9l3sIaOTj/hp49p3LGNi8eqeXCxnqYdW+m+fw8rYeERIsxwZJRHPh/dbVcYHAhw99VreoL9nK4/xdQZM5m7qJiigkKWFa/kie8Vn262srFwEStKiiktWca6+XN5W1+HTTJboTAF/s/dvH//ls7vAeraH9L5LUDtieNMmDiJnNyFlFeuJz83l2e+l/TeaGHt0gJKSpdTsbqUkoV5vGk4R5RENqEZNWm485SD3nbuvuviZHM7HR/8NF+9Ss6cPPILithQtZvionIam1tQXvuo3lLFrr27OHJ4P9s3b+K+bE88aeNxmjz4c4jeYJCfIyEGh4bQNIGzGrwX8DY0yscyCcoWKBHF1TtuXJPIxELIFg0Qi8eJxqIoqnwU01T40hek62sfcenQdQMhyWTSPHv+gucvXpJKp13NIZVO0dPtp+ujHzsal6+tY1q2jI1lE7q/bBqoqsZIKEwoHHERuiCZSsqgGKPu3nBtp5KYDNZNS46PKbWonIio/Np/xsYZEfewGxCTtyXcG6Mxm3Q6I6vN8HslEnFiMul4zVnJZMKt8BeJu1RU5KQvzwAAAABJRU5ErkJggg==","aspectRatio":1.530612244897959,"src":"/static/3135af1ed76bd7af4e8dac68c6e85ee6/630fb/featured.png","srcSet":"/static/3135af1ed76bd7af4e8dac68c6e85ee6/5db04/featured.png 75w,\\n/static/3135af1ed76bd7af4e8dac68c6e85ee6/6d161/featured.png 150w,\\n/static/3135af1ed76bd7af4e8dac68c6e85ee6/630fb/featured.png 300w,\\n/static/3135af1ed76bd7af4e8dac68c6e85ee6/62b1f/featured.png 450w,\\n/static/3135af1ed76bd7af4e8dac68c6e85ee6/2a4de/featured.png 600w,\\n/static/3135af1ed76bd7af4e8dac68c6e85ee6/a1300/featured.png 2734w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Currency Converter","slug":"/currency-converter","subtitle":"Check the Exchange Rates of the World\'s Top Currencies","category":"Science & Technology","primaryTech":"React","date":"24 days ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAACToAAAk6AGCYwUcAAAByElEQVQ4y31TWW7CUAzk/tfoDSq1v/DRGyCagkpYlX3fCFumHoegpKn6JCuxn994G0+apgEPv5T7/a664zgwDAPr9Rr7/R7L5RKr1Qrz+RxhGA7e9DEm3c/vU5YlgiBQsSwLu90OnufheDyiKIqRf4cx6X6u1yuqqsLpdNLv+XxWqetaASjUb7cbLpeLBqQfv3z7zLAD5CVLYTae7yGOYyRJAtu2NbMsyxBFkbaCfryj3XVdDTACZAa8dD0R14EvpRKUALZjK6Dv+23AB9B2u8Vms0Ge58MechAslRkQOM8zdSIAgfifpSlSEfrQtlgsMJ1OMZvNdHCjDPmIAyBIkqT6iJnQxiAEos6MaTNNUydPoX0E2D+Hw0EfsjyWRfpwyqQPgdhX3v055b7Cstkb27JFLNV5OFm2peNoIr21evQZ8LBPTNIiCDx4sTRfgEmZv7JIBciUgNUj4AiwbywqwPwwgLoabYMKjWGE++cXhC+q/7spWVji+PIGSKZNezlYLz3fJvD6LtHLLvXxprTslw2RzMpTjlp0ltxtQdfjWiST7YhkEVjyuW63Z1QyndM0QS794YT7K/jMXqjEQcRCIQ6FVKNff1N+ABZbOHm4wyF4AAAAAElFTkSuQmCC","aspectRatio":1.3888888888888888,"src":"/static/42140813f914dd0570a26ee807f3b54f/630fb/featured.png","srcSet":"/static/42140813f914dd0570a26ee807f3b54f/5db04/featured.png 75w,\\n/static/42140813f914dd0570a26ee807f3b54f/6d161/featured.png 150w,\\n/static/42140813f914dd0570a26ee807f3b54f/630fb/featured.png 300w,\\n/static/42140813f914dd0570a26ee807f3b54f/62b1f/featured.png 450w,\\n/static/42140813f914dd0570a26ee807f3b54f/2a4de/featured.png 600w,\\n/static/42140813f914dd0570a26ee807f3b54f/a6acc/featured.png 2295w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Mapbox Locator","slug":"/mapbox-hack","subtitle":"Search and Learn More About Any Postal Code","category":"Geolocation","primaryTech":"React","date":"a month ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACToAAAk6AGCYwUcAAACeElEQVQoz22SS2/TQBSF/WfZIYFgixALhFggVqwQUoVYoMKCRQUqEl1VKaVt2pLmZTtxbI89fsWx4yQkhCQfY/dBF4x0NL5zPeeec+dqm82GEtdrOp0yHo9ZLpdVfDt3e63X6//mtNuXFosFhmHQbneQUt4QlphOJkyuUBYsioIsy6q9PJvNZqxWK7TbCsuEZVmEYUicJDdkJeI4rooEQUCg8lEUVfH1WUleutKupVakV8Q3Tm7iTVVE+j6xIirJwiC8RHiJkngxn/9TuL7Cr/mSbDzn9581y/WGVXm+WpONRozGE7LJjNlUWZ8qq9VetqH8nl5ank1y0tBhNAzYMjO+WjFRHPCyU/C0VbBnxwwjjzBSShKP170hP11JnrjqP5ds6FLkEcIxlVKJNsliHKtJ5PV4cyFpCZeB9HhQH/PwNKTu6Ahf0DYb1Iw2j08T9toXSHHGSecIU91LQ4vY6zOKFWE8GrLV9JB2l9pAKEKbjtnlyVmiCHPedsJKkd47533L5O1PG18/IvQ6OL7NTt/F8dpIz1CPJdDCQPCq7tByHI7dPjs9j66S/7yRcL+ec7de8FwpDcwmH4yEZxdDDhpNhHVKTXhsd9VEiD5N/xA3bqNFsc+xadAQkh094KMpK7xoZtw7ydjVBd8tm8husmu6bF9YHBg6qWhxbLl80ssxsnFFDy810caqh8agy9Zpn912n8Dt8ehYcv/E586PnG1dqvFQllQvDdfmnSrwraGjD86V1TNq3UP6qlgkuqqXA7TFrMBRtl01W0UuGeU5X5yEz2rA3ztz9v2MSa5eWjU8GqbshwWDOCVNBd3hOX6qE0mBkEp1GvAXKotybSD6kvUAAAAASUVORK5CYII=","aspectRatio":1.6666666666666667,"src":"/static/a091c0590e2127124717d8a4825ce192/630fb/featured.png","srcSet":"/static/a091c0590e2127124717d8a4825ce192/5db04/featured.png 75w,\\n/static/a091c0590e2127124717d8a4825ce192/6d161/featured.png 150w,\\n/static/a091c0590e2127124717d8a4825ce192/630fb/featured.png 300w,\\n/static/a091c0590e2127124717d8a4825ce192/62b1f/featured.png 450w,\\n/static/a091c0590e2127124717d8a4825ce192/2a4de/featured.png 600w,\\n/static/a091c0590e2127124717d8a4825ce192/b4cbe/featured.png 2945w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Stock Image Finder","slug":"/photo-search","subtitle":"Find free stock images to use whereever","category":"Art & Entertainment","primaryTech":"React","date":"10 days ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACToAAAk6AGCYwUcAAADS0lEQVQ4y22Sa0ybZRiG6w9jYgxz0WRAx5hjaAc76IwmM2o0KomKm2xsWRO7LNmKrlkCkzJYOQktcuj5K1CQw/rRwjY2R8p+uMlGTcZwCooF2tKtB6Iunpv4y8gkl1/Lkm3RN7nf50ne+7me+8cryxMW+D893RHmmc5wqj7rXOmT2n6n39K+wCYh9J852ZO2EPcqV1LS+IYrylsDUalGKBqK8Y4nSoEYYddgLKXnu2+QYw3ylP3+edldurTNHiRfCLJZ0hZHkK0dC6mBzVJKheMGCiHMJsdKaoUtKPkDKX/ePUllWaYAWcYAa01B0u1R0i0RHjNFeaQ5xk4xTuXo9xwcCqP2zPLBuRCl50NktM6TYY2yzrGY8svN4RQjyZJlmwOsM4fIMfrZphlgx4nTqI2DHOhzUTro5k2jgb2nJlBdjPGqbYqS3inKL91CUe4hW+1gR92nKBrHybKEyU4CcyxB1tvC5LdOYytQ49Ae52qLkvELexDce1illLO91UbeoA+5sosj+hEmFxO8piol/+VCqprtvN54jrW2CBstEjDNMEuaYY7VzQHkrUEpdkiKP0+6VNeYwmSYbyKX+syWeektzMb2OE844qS3Bck0BsmWAsmlZKua5kiyZOLMH4gzCay+OB+NzlIzMoPxcoyuz6YQx64gDF+i1vUF9s8nqeg7w+4GkWKDG+NYFOHq7+gv/ojOu0jn5C94/Alk3DlluipyX3yJV94tpORYGb62Kvy6tzl7uBC98hDjnsPUqx7nhdyHWb/mQb6auMafib+YD/1G++kAP9xKpDiy28vw9+1/2K85yqPbnkNbV4G2oQZBW03DbhVluw6i2fchXtcRHMdzcZ7YSnHhBjqcJ7n+5bdcn47RIU4Qivy8Akxey8vL9In91DTUUl2vo7K2EpsEfa9oJ6q9RWhKNAx3q1AWPMSGTBlpqx9AMBkRGluw1JnQHirH/43/fqDnzAB6s54maxNWpwXflTFcAz04eyx0fdLL9MQpWvTHeP9ombS0mlHvBVx9HgSbk+aPzcRi8bvApaUlhsROzo704B7uor/Xgf+nCS7/qqF/qpgKs5q2bhGd5STTczfx+qQv1u+lWF2PweZmX0kd177+LgX8Fx1Ousbne16hAAAAAElFTkSuQmCC","aspectRatio":1.5625,"src":"/static/d349ae60949f5bc40f03ab00240e5bef/630fb/featured.png","srcSet":"/static/d349ae60949f5bc40f03ab00240e5bef/5db04/featured.png 75w,\\n/static/d349ae60949f5bc40f03ab00240e5bef/6d161/featured.png 150w,\\n/static/d349ae60949f5bc40f03ab00240e5bef/630fb/featured.png 300w,\\n/static/d349ae60949f5bc40f03ab00240e5bef/62b1f/featured.png 450w,\\n/static/d349ae60949f5bc40f03ab00240e5bef/2a4de/featured.png 600w,\\n/static/d349ae60949f5bc40f03ab00240e5bef/6400a/featured.png 2657w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}},{"node":{"frontmatter":{"title":"Weather Forecast","slug":"/weather-hack","subtitle":"Five Day Weather Forecast for You Location","category":"Science & Technology","primaryTech":"React","date":"22 days ago","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAACToAAAk6AGCYwUcAAADRElEQVQ4y12Pa1ObRRiG36YCM6HWptQESGyBAsU4jqL+Aj846mj191jAWu20A4iQcEiAhEAOhFAKthJIoBVooZQgkJIeaAkECjkUEKZT/Xq575vQ6fjhmvt5dve5dleSepNI3gSqDEcFRwRSbzoP68P+db4xo1L6ZBpJOSQKVwZ3EnV/itxrKbJ8KaV+ZyDFsWtJsn3pdTnf6ntjRka+1LMthEKW59vkK/8aX/rXFc4HYpwfXefbEYHI7wTfBzf4RqSyLmdAPrvG1/4on/++QpZjBcmxKoTC/oU/xqv9JPsHu+ylttiNr/PPwQv+PUjxcj/FxmaUWGyVnd0kO3tJEskEm8/j7P39glcvd4nGt9E6lpFsQip5Unw4GMP2KIX18Q7W5TjWB1vYHiYUOgWWB9u0hbdojyQEcaVvWdjEEn6OPbJFw9wqx9vuI7Utyi/cIMv2EI17lROeKBrBCc8a+r4oZQPrvCeyqO8Zxd6nFPU+4aznEfndy2i6wmjsYU4JTlruc6RxGqklJISOZ2S3hznteULFQIwS7wqFPcu873tKqTtCcc8SH3gfY+yNcMaxSLk7TLlriYKOOUq6QpR2z6NrmUJVF0RqnBLCjgg5zbMUdC1hdM1ypnsBrbjV6LxHkSOEzrZIheMuZ+0zaC0zGLsWqBSXnGqZpLRzjnP2ed4130Z1dQSp/pYQti6QY7qLVgx+Zr9JUecUedZ5Pu0YpMQyxsnWWT62DlFmCaARL6kU5z4RaJqCfGSdo7I9RF79MKpL15GuDAuhaYbs+nEK2u5gsP2F3nqP/NZJDJ0h9JZp8pv/xGCdQS9k+qYxilpvcbp5nMLfAhhMQaXW1v2B6qIP6echIWyYJLt2lMKWCYy2aTEwga5xjArrBMXy4YZRyttuU2weQ/ern3NCWGoOoqu9QWmTn3KTH+1lH6ofupFqeoXw6ig5vwyibwxiMI8rrygU3zEoBCgxCaF5hLKmYYobbmCoG0JfN0hh7XUMMqLPv9KfEXqF8PJNjor/517qR/2TD/VFL7k/elDXuMitdnKspofjNU7eFinX6moZp7L3Oqt6kC44My+U/y6bq1xi8X8oa+5M705TdYgrnRcyKcuqPfwHXrXQy5rc0nkAAAAASUVORK5CYII=","aspectRatio":1.4423076923076923,"src":"/static/7d01d4110925d5043024862686e3a2f8/630fb/featured.png","srcSet":"/static/7d01d4110925d5043024862686e3a2f8/5db04/featured.png 75w,\\n/static/7d01d4110925d5043024862686e3a2f8/6d161/featured.png 150w,\\n/static/7d01d4110925d5043024862686e3a2f8/630fb/featured.png 300w,\\n/static/7d01d4110925d5043024862686e3a2f8/62b1f/featured.png 450w,\\n/static/7d01d4110925d5043024862686e3a2f8/2a4de/featured.png 600w,\\n/static/7d01d4110925d5043024862686e3a2f8/2d244/featured.png 2468w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-hackathon-js-9b01a0960f76822d98dd.js.map