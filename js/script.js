$(function () {
  // 스크롤 트리거 연결
  gsap.registerPlugin(ScrollTrigger);
  // section1
  gsap.timeline({
    scrollTrigger: {
      trigger: '.section1', // 섹션1이 트리거
      start: 'top top',     // 스크롤 시작 지점
      end: '+=100%',        // 트리거의 끝 지점 (스크롤 멈추는 영역 조정)
      scrub: 1,             // 애니메이션이 스크롤에 따라 동기화
      pin: true,            // 섹션 고정
      // markers: true       // 디버깅용 마커 표시
    }
  })
    .fromTo('.section1 .container .title .a',
      { x: '0%' },
      { x: '-185%', ease: 'none', duration: 5 }, 0)
    .fromTo('.section1 .container .title .b',
      { x: '0%' },
      { x: '185%', ease: 'none', duration: 5 }, 0);

  // section2 이미지 텍스트 변경
  gsap.fromTo('.textBox .mask span', {
    'background-size': '0% 100%'
  }, {
    'background-size': '100% 100%',
    scrollTrigger: {
      trigger: '.textBox',
      // 고정할 박스
      pinnedContainer: '.textBox',
      start: '0% 100%',

      // markers: true,
      scrub: 2
    }
  });
  // section3 가로스크롤
  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {

      // 02 가로스크롤 본문에 있는 work의 ul list를 배열로 만듬
      let list = gsap.utils.toArray('.section3 ul li')
      // 스크롤 트윈이라는 변수에 to animation
      let scrollTween = gsap.to(list, {
        // x퍼센트의 길이를 구하는 방법, 원래 리스트의 갯수보다 1을빼서 길이를 구한 후에 가로로 이동
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ".section3",
          pin: true,
          scrub: 1,
          start: 'center center',
          end: '150%', //뷰포트 높이의 300%이며 숫자가 클수록 느려진다.
          // markers: true
        }
      });
    }
  })
  gsap.timeline({
    scrollTrigger: {
      trigger: '.con1',
      start: '0% 50%',
      end: '30% 0%',
      scrub: 2,
      // markers: true,
    }
  })
    // 대상먼저
    .fromTo('.con1 .circle', { 'width': '0', 'height': '0', 'duration': '10', 'ease': 'elastic', 'top': '3%.' }, {
      'width': '2500px',
      'height': '2500px', 'duration': '10', 'opacity': '1', 'top': '0%'
    }, 0)


  // section1

  let scrolled = false;

  $(window).on('scroll', function () {
    if (!scrolled) {
      scrolled = true;

      // 비디오 필터 조정 (더 어둡게 설정)
      $('.section1 .bg video').css('filter', 'grayscale(1) brightness(0.5)');

      // 텍스트 투명도 설정
      $('.section1 .bottom-text').css('opacity', '0');
    }
  });
  // section4

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    const sec6 = $('.section6').offset().top;
    const sec7 = $('.section7').offset().top;
    const foot = $('.footer').offset().top - 500;
    // section5 bg변경 코드
    const sec5Offset = $('.section5').offset().top - 500;
    const sec6Offset = $('.section6').offset().top - 500;
    const $body = $('body');
    if (scrollTop > sec5Offset && scrollTop < sec6Offset) {
      $body.addClass('bg');

    } else {
      $body.removeClass('bg');  // section5 밖으로 벗어날 때는 'bg' 클래스 제거
      // section5 밖으로 벗어날 때는 'bg' 클래스 제거
    }

    // section6 포지션 fixed addclass


    if (scrollTop >= sec6 && scrollTop < sec7) {
      $('.section6 .container .left-con .left-txt').addClass('on');
      // $(".wrap").css("overflow", "visible");
    } else {
      $('.section6 .left-con .left-txt').removeClass('on');
      // $(".wrap").css("overflow", "hidden");
    }

    if (scrollTop >= sec7 && scrollTop < foot) {
      $(".wrap").css("overflow", "visible");
    } else {
      $(".wrap").css("overflow", "hidden");
    }
  });


  // section6



});
// 제이쿼리 코드