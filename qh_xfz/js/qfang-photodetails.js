(function(a) {
	a.fn.qfangPhotoAlbum = function(b) {
		var c = {
			previewFrame: "previewCon",
			curNum: "curNumber",
			totalNum: "totalNumber",
			previewTit: "previewTitle",
			guideFrame: "guideMinmapCon",
			curPointTo: "curGuide",
			previewDesp: "previewDescription",
			gBtns: "guideBtns",
			triggerEvent: "click",
			triggerEventGuide: "click",
			pBtnP: "previewBtnPrev",
			pBtnN: "previewBtnNext",
			gBtnP: "guideBtnPrev",
			gBtnN: "guideBtnNext",
			gBtnPDisa: "guideBtnPrevDisable",
			gBtnNDisa: "guideBtnNextDisable",
			hideTit: "false",
			hideGBtns: "false",
			initNum: "7",
			space: "4",
			callback: function() {}
		};
		var b = a.extend(c, b);
		return this.each(function() {
			var t = b,
				x = a("#" + t.previewFrame),
				i = a("#" + t.curNum),
				w = a("#" + t.totalNum),
				G = a("#" + t.previewTit),
				B = a("#" + t.guideFrame),
				r = a("#" + t.curPointTo),
				u = a("#" + t.previewDesp),
				g = a("#" + t.gBtns),
				l = a("#" + t.pBtnP),
				m = a("#" + t.pBtnN),
				A = a("#" + t.gBtnP),
				E = a("#" + t.gBtnN),
				q = a("#" + t.gBtnPDisa),
				j = a("#" + t.gBtnNDisa),
				s = t.hideTit,
				p = t.hideGBtns,
				k = t.space,
				y = t.initNum,
				D = x.find("img"),
				d = B.find("li").not(":last"),
				z = d.outerWidth(true),
				e = d.length,
				h = 0,
				F = 0,
				v = true;
			d.find("img").addClass("js-delay");
			w.text(e);
			s == "true" ? u.hide() : u.show();
			p == "true" ? g.hide() : g.show();

			function C() {
				B.find(".js-delay").each(function(I, o) {
					if(a(this).attr("data-src") && a(this).offset().left < a(this).closest("div").offset().left + a(this).closest("div").width() + z) {
						var H = new Image();
						H.src = a(this).attr("data-src");
						H.onload = function() {
							a(o).removeClass("js-delay");
						};
					}
				});
			}
			C();

			function f() {
				G.text(d.eq(F).find("img").attr("alt"));
				d.eq(F).find("b").hide().end().siblings().find("b").show();
				D.attr({
					"src": d.eq(F).find("img").attr("data-src"),
					"data-idx": F + 1
				});
			}
			f();
			var n = function() {
				if(e > 1) {
					E.show();
					q.show();
				}
			};
			n();
			x.hover(function() {
				if(e > 1) {
					m.stop(true, false).animate({
						"right": "0"
					}, 300);
				}
				if(F > 0) {
					l.stop(true, false).animate({
						"left": "0"
					}, 300);
				} else {
					l.stop(true, false).animate({
						"left": "-59" + "px"
					}, 300);
				}
				if(F === e - 1) {
					m.stop(true, false).animate({
						"right": "-59" + "px"
					}, 300);
				} else {
					m.stop(true, false).animate({
						"right": "0"
					}, 300);
				}
			}, function() {
				l.stop(true, false).animate({
					"left": "-59" + "px",
					"opacity": "0.3"
				}, 200);
				m.stop(true, false).animate({
					"right": "-59" + "px",
					"opacity": "0.3"
				}, 200);
			});
			l.css("opacity", 0.3).hover(function() {
				a(this).animate({
					"opacity": "0.6"
				}, 300);
			}, function() {
				a(this).animate({
					"opacity": "0.3"
				}, 300);
			});
			m.css("opacity", 0.3).hover(function() {
				a(this).animate({
					"opacity": "0.6"
				}, 300);
			}, function() {
				a(this).animate({
					"opacity": "0.3"
				}, 300);
			});
			A.css("opacity", 0.7).hover(function() {
				a(this).animate({
					"opacity": "1"
				}, 300);
			}, function() {
				a(this).animate({
					"opacity": "0.7"
				}, 300);
			});
			E.css("opacity", 0.7).hover(function() {
				a(this).animate({
					"opacity": "1"
				}, 300);
			}, function() {
				a(this).animate({
					"opacity": "0.7"
				}, 300);
			});
			l.bind(t.triggerEvent, function() {
				if(v) {
					F -= 1;
					r.stop(true, false).animate({
						"left": (z * F) + parseInt(k)
					}, 300, function() {
						v = true;
					});
					if(F === 0) {
						l.stop(true, false).animate({
							"left": "-59" + "px"
						}, 300);
						A.hide();
						q.show();
					}
					if(F !== e - 1) {
						m.stop(true, false).animate({
							"right": "0"
						}, 300);
						E.show();
						j.hide();
					}
					if((F + 1) % parseInt(y) === 0) {
						h = parseInt(F / parseInt(y));
						B.stop(true, false).animate({
							"left": -(z * parseInt(y) * h)
						}, 300, function() {
							C();
						});
					}
					i.text(F + 1);
					f();
					if(a.isFunction(t.callback)) {
						t.callback(D);
					}
					v = false;
				}
			});
			m.bind(t.triggerEvent, function() {
				if(v) {
					F += 1;
					r.stop(true, false).animate({
						"left": (z * F) + parseInt(k)
					}, 300, function() {
						v = true;
					});
					if(F > 0) {
						l.stop(true, false).animate({
							"left": "0"
						}, 300);
						A.show();
						q.hide();
					}
					if(F === e - 1) {
						m.stop(true, false).animate({
							"right": "-59" + "px"
						}, 300);
						E.hide();
						j.show();
					}
					if(F % parseInt(y) === 0) {
						h = parseInt(F / parseInt(y));
						B.stop(true, false).animate({
							"left": -(z * parseInt(y) * h)
						}, 300, function() {
							C();
						});
					}
					i.text(F + 1);
					f();
					if(a.isFunction(t.callback)) {
						t.callback(D);
					}
					v = false;
				}
			});
			A.bind(t.triggerEvent, function() {
				if(v) {
					F -= 1;
					r.stop(true, false).animate({
						"left": (z * F) + parseInt(k)
					}, 300, function() {
						v = true;
					});
					if(F === 0) {
						a(this).hide();
						q.show();
					}
					if(F !== e - 1) {
						E.show();
						j.hide();
					}
					if((F + 1) % parseInt(y) === 0) {
						h = parseInt(F / parseInt(y));
						B.stop(true, false).animate({
							"left": -(z * parseInt(y) * h)
						}, 300, function() {
							C();
						});
					}
					i.text(F + 1);
					f();
					if(a.isFunction(t.callback)) {
						t.callback(D);
					}
					v = false;
				}
			});
			E.bind(t.triggerEvent, function() {
				if(v) {
					F += 1;
					r.stop(true, false).animate({
						"left": (z * F) + parseInt(k)
					}, 300, function() {
						v = true;
					});
					if(F > 0) {
						A.show();
						q.hide();
					}
					if(F === e - 1) {
						a(this).hide();
						j.show();
					}
					if(F % parseInt(y) === 0) {
						h = parseInt(F / parseInt(y));
						B.stop(true, false).animate({
							"left": -(z * parseInt(y) * h)
						}, 300, function() {
							C();
						});
					}
					i.text(F + 1);
					f();
					if(a.isFunction(t.callback)) {
						t.callback(D);
					}
					v = false;
				}
			});
			d.bind(t.triggerEventGuide, function() {
				if(v) {
					var o = a(this).index();
					F = o;
					r.stop(true, false).animate({
						"left": (z * F) + parseInt(k)
					}, 300, function() {
						v = true;
					});
					if(F > 0 && F < parseInt(y)) {
						A.show();
						q.hide();
					}
					if(F === e - 1) {
						E.hide();
						j.show();
					} else {
						E.show();
						j.hide();
					}
					if(F === 0) {
						A.hide();
						q.show();
					}
					i.text(F + 1);
					f();
					if(a.isFunction(t.callback)) {
						t.callback(D);
					}
					v = false;
				}
			});
		});
	};
})(jQuery);
(function(b) {
	var f = {
		photoArr: [],
		activeNum: 1,
		firstTipsFun: function() {},
		lastTipsFun: function() {}
	};
	var g;
	var c = null;
	b.qfangLightbox = function(n) {
		b.extend(f, n);
		b("body").append(i());
		c = b(".hq-photo");
		a();
		if(f.activeNum == 1) {
			c.find(".hq-photo-prev").addClass("hq-photo-prev-dis");
		}
		if(f.activeNum == f.photoArr.length) {
			c.find(".hq-photo-next").addClass("hq-photo-next-dis");
		}
		k();
		h(f.photoArr[f.activeNum - 1].src, true);
		c.find(".hq-photo-close a").on("click", function() {
			l();
		});
		c.find(".hq-photo-prev a").on("click", function() {
			e();
		});
		c.find(".hq-photo-next a").on("click", function() {
			j();
		});
		if(b.isFunction(f.afterRender)) {
			f.afterRender(f);
		}
	};

	function d(o) {
		var n = [];
		if(f.photoArr.length === 1) {
			n.push(0);
		} else {
			b.each(f.photoArr, function(q, p) {
				if(q + 1 == o) {
					if(q === 0) {
						n.push(q);
						n.push(q + 1);
					} else {
						if(q === f.photoArr.length - 1) {
							n.push(q - 1);
							n.push(q);
						} else {
							n.push(q - 1);
							n.push(q);
							n.push(q + 1);
						}
					}
				}
			});
		}
		b.each(n, function(r, p) {
			if(!f.photoArr[p].state) {
				var q = new Image();
				q.src = f.photoArr[p].src;
				q.onload = function() {
					f.photoArr[p].status = true;
				};
			}
		});
	}
	f.switchStatus = function() {
		if(f.activeNum <= 1) {
			f.activeNum = 1;
			c.find(".hq-photo-prev").addClass("hq-photo-prev-dis");
			c.find(".hq-photo-next").removeClass("hq-photo-next-dis");
		} else {
			if(f.activeNum < f.photoArr.length) {
				c.find(".hq-photo-prev").removeClass("hq-photo-prev-dis");
				c.find(".hq-photo-next").removeClass("hq-photo-next-dis");
			} else {
				if(f.activeNum === f.photoArr.length) {
					c.find(".hq-photo-prev").removeClass("hq-photo-prev-dis");
					c.find(".hq-photo-next").addClass("hq-photo-next-dis");
				}
			}
		}
		a();
		if(b.isFunction(f.onClick)) {
			f.onClick(f);
		}
	};

	function i() {
		var n = '<div class="hq-photo">';
		n += '<div class="hq-photo-inner">';
		n += '<p class="hq-photo-view hq-photo-view-cur">';
		n += '<img src="' + f.photoArr[f.activeNum - 1].src + '" width="auto" height="auto" class="hq-pic" />';
		n += '<i class="refer"></i>';
		n += "</p>";
		n += '<p class="hq-photo-view hq-photo-view-next">';
		n += '<img src="' + f.photoArr[f.activeNum - 1].src + '" class="hq-pic" />';
		n += '<i class="refer"></i>';
		n += "</p>";
		n += "</div>";
		n += '<div class="hq-photo-total"></div>';
		n += '<p class="hq-photo-btn hq-photo-prev ' + (f.activeNum === 1 ? "hq-photo-prev-dis" : "") + '"><a class="btns - photoalbum" href="javascript:;"></a></p>';
		n += '<p class="hq-photo-btn hq-photo-next ' + (f.activeNum === f.photoArr.length ? "hq-photo-next-dis" : "") + '"><a class="btns-photoalbum" href="javascript:;"></a></p>';
		n += '<p class="hq-photo-close"><a class="btns-photoalbum" href="javascript:;"></a></p>';
		n += "</div>";
		return n;
	}

	function k() {
		c && c.css({
			width: b(window).width(),
			height: b(window).height()
		});
	}
	b(window).on("resize.qfanglightbox", function() {
		if(g) {
			clearTimeout(g);
		}
		g = setTimeout(k, 25);
	});

	function e() {
		if(f.activeNum == 1) {
			if(f.firstTipsFun && b.isFunction(f.firstTipsFun)) {
				f.firstTipsFun();
			}
			return;
		}
		f.activeNum--;
		f.switchStatus();
	}

	function j() {
		if(f.activeNum == f.photoArr.length) {
			if(f.lastTipsFun && b.isFunction(f.lastTipsFun)) {
				f.lastTipsFun();
			}
			return;
		}
		f.activeNum++;
		f.switchStatus();
	}

	function a() {
		var n = "";
		if(f.description && b.isFunction(f.description)) {
			n = f.description(f.activeNum, f.photoArr);
		}
		c.find(".hq-photo-total").text(n);
		d(f.activeNum);
		h(f.photoArr[f.activeNum - 1].src, false);
		b(c).find(".hq-photo-view-cur").addClass("loading").find(".hq-pic")[0].src = "data:image/gif;base64,R0lGODlhAQABAIAAAP// /wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
		b(c).find(".hq-photo-view-next").find(".hq-pic").attr("src", f.photoArr[f.activeNum - 1].src);
	}

	function m() {
		b(c).find(".hq-photo-view").removeClass("loading");
		b(c).find(".hq-photo-view-cur").fadeOut();
		b(c).find(".hq-photo-view-next").fadeIn(function() {
			b(c).find(".hq-photo-view").each(function() {
				if(b(this).hasClass("hq-photo-view-cur")) {
					b(this).removeClass("hq-photo-view-cur").addClass("hq-photo-view-next");
					return;
				}
				if(b(this).hasClass("hq-photo-view-next")) {
					b(this).removeClass("hq-photo-view-next").addClass("hq-photo-view-cur");
					return;
				}
			});
		});
	}

	function h(t, s) {
		var n = c.find(".hq-photo-inner").width();
		var q = c.find(".hq-photo-inner").height();
		var r = new Image();
		var o = {
			w: 0,
			h: 0
		};
		var p = s === true ? c.find(".hq-photo-view-cur") : c.find(".hq-photo-view-next");
		r.onload = function() {
			o.w = r.width;
			o.h = r.height;
			if(o.w > n || o.h > q) {
				if(o.w / o.h > n / q) {
					p.find(".hq-pic").css({
						width: "100%",
						height: "auto"
					});
				} else {
					p.find(".hq-pic").css({
						width: "auto",
						height: "100%"
					});
				}
			} else {
				p.find(".hq-pic").css({
					width: "auto",
					height: "auto"
				});
			}
			if(!s) {
				m();
			}
		};
		r.src = t;
	}

	function l() {
		f.onClick = null;
		f.afterRender = null;
		c.remove();
	}
})(jQuery);