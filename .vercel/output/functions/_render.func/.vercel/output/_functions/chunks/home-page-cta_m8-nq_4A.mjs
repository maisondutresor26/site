const ctaImgSrc = new Proxy({"src":"/_astro/riad-4.vsflRWUX.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/home-page-cta.jpg";
							}
							
							return target[name];
						}
					});

export { ctaImgSrc as c };
