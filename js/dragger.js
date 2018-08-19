window.app = {
    config: {
        canDrag: false,
        SliderTranslateY: 0,
        cursorOffsetY: null
    },
    reset: function () {
        this.config.cursorOffsetY = null;
        SliderTranslateY = 0;
    },
    start: function () {
        setupSliderPositionIndicator();
        updateSliderPositionIndicator();
        setupPageNumber();
        document.getElementById('projects-slider').addEventListener('dragstart', function (event) {
            // console.log('+++++++++++++ dragstart')
            this.config.cursorOffsetY = event.offsetY;
            this.adjustPostion(event);
            var img = new Image();
            img.style.visibility = "hidden";
            event.dataTransfer.setDragImage(img, 10, 10);
        }.bind(this));
        document.getElementById('projects-slider').addEventListener('drag', function (event) {
            // console.log('+++++++++++++ drag')
            this.adjustPostion(event);
          }.bind(this));
        document.getElementById('projects-slider').addEventListener('dragend', function (event) {
            // console.log('+++++++++++++ dragend')
            oldSliderTranslateY = oldSliderTranslateY - SliderTranslateY;
            // console.log(oldSliderTranslateY);
            moveProjectSlider(oldSliderTranslateY);
            this.reset();
        }.bind(this));;
    },
    adjustPostion: function (event) {
        if (event.pageX <= 0 || event.pageY <= 0) {
            // console.log('skipped');
            return;
        }
        var slider = document.getElementById('projects-slider');
        slider.style.transition = "0s transform";
        SliderTranslateY = pxTOvh(event.pageY - this.config.cursorOffsetY);
        slider.style.transform = "translateY(" + SliderTranslateY + "vh)";
    }
};