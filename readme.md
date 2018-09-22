# Trichotomy

Nested Layout Composition Using a Trichotomy Principle.

[Website (including examples)](https://tgv1975.github.io/trichotomy/)

## Getting Started

This package is to be deployed as a single CSS file. However, if you plan on forking it, or in any other way make changes to it, these instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

No prerequisites required.

### Installing

Install like you would any npm module:

```
npm install trichotomy@latest
```

Import the trichotomy.css (or trichotomy.min.css) from your *node_modules/trichotomy/dist* into your project as you'd normally import any of your CSS assets.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tudor Gavan** - *Trichotomy* - [Trichotomy](https://github.com/tgv1975/trichotomy)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Mother nature, for providing the model
* Human nature, for providing the abstraction

## The Concept
We often divide things into three parts when we conceptualize about them.

**House**: Foundation, storeys, roof.

**Tree**: Roots, trunk, branches.

**Arbitrary stretch in space**: Front, middle, back; **or time**: Begining, middle, end.

This conceptual pattern arises even when the three parts are not readily identifiable. For instance, for a window opening we get the upper rail, window panes, and stool. The first and last elements can be easily discarded, conceptually, because the window panes are what really defines a window, but they are there nevertheless, even if mostly hidden.

In UI design, there is the classic trichotomy of the interface:

**Header, Center(piece), Footer**

Simpler UIs have to use this pattern only once, at the top level: the app's shell, its main layout. But as the UI gets more complex, there arises a need to repeat this pattern, over and over. Think DAW interfaces that can get pretty complex.

Therefore it would be useful to define an implementation of this concept/pattern into web design, using current technologies, based on these principles:

* Most non-trivial layouts require separation into well-defined regions.
* Most separation can be achieved by trichotomy (the classic header-body-footer combo).
* Trichotomies can be composed and merged, giving the concept a fractalic nature, which obliges any possible implementation to remain simple, and gain complexity by repetition, not special cases.

## This implementation
It's nothing new. But it brings to the table a few advantages: utmost simplicity while retaining meaning in relation to the underlying concept; scalability; disregard of all else but the underlying concept, including prettiness - that is the concern of the frontend library you may chose for the task.

Any consumer may simply import trichotomy.css and use the container classes (.trichotomy, .vertical, .horizontal) and the .centerpiece class. The rest takes care of itself by the magic of flex. The implementation does not rely on any framework, it's pure HTML5/CSS3. This should make it play nice with all frontend frameworks (Bootstrap, Semantic UI, etc.), the use of which I actually encourage along with this is, in fact, encouraged.

## Caveats
Dynamic functionality, some of the actual sizing, obviously the final styling, are all the responsibility of the consumer.

## TODO
* Define and solve horizontal overlays, which would cover the case of dynamic hiding of headers/footers.
* Offer build and installation instructions.
* More complex examples.
* Offer ready-made HTML templates.
* Complex integrations: Bootstrap 4 and Angular/React as a turnkey solution for fundamental layout needs.