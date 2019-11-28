class PrintOutView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        this.container.append(
            makeWithAttr("div", "print-container", "", "")
        );
        this.afterRender();
    }

    afterRender() {
        this.model.addObserver(["dishes"], this.update.bind(this), this);
    }

    update(dishes) {
        // TODO Lab3

        //let dishes = this.model.getFullMenu();
        this.container.querySelector("#print-container").textContent = '';

        dishes.map(dish =>  {
            this.container.querySelector("#print-container").append(
                makeWithAttr("div", "", "print-cluster", [
                    makeImage("", "print-image", dish.image),
                    makeWithAttr("div", "", "dish-title", dish.title),
                    make("div", [
                        make("div", "Preparation"),
                        make("br", ""),
                        makeWithAttr("div","", "dish-instructions", dish.instructions)
                    ])
                ])
            );
        });
    }
}
