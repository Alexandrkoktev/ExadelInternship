;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    103: function(e, t, a) {},
    128: function(e, t, a) {},
    129: function(e, t, a) {},
    145: function(e, t, a) {
      e.exports = a.p + 'static/media/user.8d83d05e.jpg'
    },
    152: function(e, t, a) {
      e.exports = a(265)
    },
    157: function(e, t, a) {},
    158: function(e, t, a) {},
    163: function(e, t, a) {},
    190: function(e, t, a) {},
    212: function(e, t, a) {},
    213: function(e, t, a) {},
    214: function(e, t, a) {},
    258: function(e, t, a) {},
    259: function(e, t, a) {},
    264: function(e, t, a) {},
    265: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(32),
        i = a.n(o),
        s = (a(157), a(6)),
        c = a(7),
        u = a(9),
        l = a(8),
        p = a(10),
        m = a(273),
        d =
          (a(158),
          (function(e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
              )
            }
            return (
              Object(p.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    return r.a.createElement(
                      'footer',
                      null,
                      '\xa9 2019 Exadel, Inc. | Team4 Internship'
                    )
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        f = a(276),
        h = a(278),
        v = a(23),
        E = a(13),
        g = (a(163), a(4)),
        b = a.n(g),
        y = a(14),
        O = 'GET_USER_DATA',
        j = 'GET_USER_DATA_SUCCESS',
        k = 'GET_USER_DATA_ERROR',
        C = 'RESET_USER_DATA'
      function R() {
        return { type: O }
      }
      function S(e) {
        return { type: j, payload: e }
      }
      var N = a(24),
        P = a(140),
        x = a
          .n(P)
          .a.create({
            baseURL: 'https://carpool111.herokuapp.com',
            withCredentials: !0,
          }),
        w = function(e) {
          return {
            userInfo: e.userInfo,
            error: e.userInfo.error,
            isError: !!e.userInfo.error,
          }
        },
        T = function(e) {
          return {
            setUser: function(t, a) {
              return e(
                (function(e, t) {
                  return (function() {
                    var a = Object(y.a)(
                      b.a.mark(function a(n) {
                        var r, o, i, s, c, u, l, p, m, d, f
                        return b.a.wrap(
                          function(a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    n(R()),
                                    (r = new FormData()).append(
                                      'j_username',
                                      e
                                    ),
                                    r.append('j_password', t),
                                    (a.next = 7),
                                    x({
                                      url: '/api/login',
                                      method: 'post',
                                      data: r,
                                    })
                                  )
                                case 7:
                                  return (
                                    (a.next = 9),
                                    x({ url: '/api/header', method: 'get' })
                                  )
                                case 9:
                                  return (
                                    (o = a.sent),
                                    (i = o.data),
                                    (a.next = 13),
                                    x({ url: '/api/profile', method: 'get' })
                                  )
                                case 13:
                                  return (
                                    (s = a.sent),
                                    (c = s.data.photoUrl),
                                    (a.next = 17),
                                    x({ url: '/api/profile', method: 'get' })
                                  )
                                case 17:
                                  return (
                                    (u = a.sent),
                                    (l = u.data.ratingDriver),
                                    (a.next = 21),
                                    x({ url: '/api/profile', method: 'get' })
                                  )
                                case 21:
                                  return (
                                    (p = a.sent),
                                    (m = p.data.ratingPassenger),
                                    (a.next = 25),
                                    x({ url: '/api/profile', method: 'get' })
                                  )
                                case 25:
                                  ;(d = a.sent),
                                    (f = d.data.phoneNumber),
                                    n(
                                      S({
                                        username: i.name,
                                        role: i.role,
                                        photoUrl: c,
                                        ratingDriver: l,
                                        ratingPassenger: m,
                                        phoneNumber: f,
                                      })
                                    ),
                                    n(Object(N.d)('/home')),
                                    (a.next = 34)
                                  break
                                case 31:
                                  ;(a.prev = 31),
                                    (a.t0 = a.catch(0)),
                                    n(((h = a.t0), { type: k, error: h }))
                                case 34:
                                case 'end':
                                  return a.stop()
                              }
                            var h
                          },
                          a,
                          null,
                          [[0, 31]]
                        )
                      })
                    )
                    return function(e) {
                      return a.apply(this, arguments)
                    }
                  })()
                })(t, a)
              )
            },
          }
        },
        A = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.userInfo,
                    a = e.userLogOut,
                    n = !!t.username,
                    o = 'ROLE_ADMINISTRATOR' === t.role
                  return r.a.createElement(
                    'header',
                    null,
                    r.a.createElement(
                      f.a,
                      {
                        collapseOnSelect: !0,
                        expand: 'lg',
                        bg: 'dark',
                        variant: 'dark',
                        sticky: 'top',
                      },
                      !n &&
                        r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(f.a.Brand, null, 'CarPool')
                        ),
                      n &&
                        r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            v.a,
                            { to: '/home' },
                            ' ',
                            r.a.createElement(f.a.Brand, null, 'CarPool')
                          ),
                          r.a.createElement(f.a.Toggle, {
                            'aria-controls': 'responsive-navbar-nav',
                          }),
                          r.a.createElement(
                            f.a.Collapse,
                            { id: 'responsive-navbar-nav' },
                            r.a.createElement(h.a, { className: 'mr-auto' }),
                            r.a.createElement(
                              h.a,
                              null,
                              r.a.createElement(
                                h.a.Item,
                                null,
                                o &&
                                  r.a.createElement(
                                    v.a,
                                    {
                                      to: '/statistics',
                                      className: 'nav-link',
                                    },
                                    'Statistics'
                                  )
                              ),
                              r.a.createElement(
                                h.a.Item,
                                null,
                                r.a.createElement(
                                  v.a,
                                  {
                                    to: '/notifications',
                                    className: 'nav-link',
                                  },
                                  'Notifications'
                                )
                              ),
                              r.a.createElement(
                                h.a.Item,
                                null,
                                r.a.createElement(
                                  v.a,
                                  { to: '/routes', className: 'nav-link' },
                                  'Routes'
                                )
                              ),
                              r.a.createElement(
                                h.a.Item,
                                null,
                                r.a.createElement(
                                  v.a,
                                  { to: '/profile', className: 'nav-link' },
                                  t.username
                                )
                              ),
                              r.a.createElement(
                                h.a.Item,
                                { className: 'nav-link' },
                                r.a.createElement('span', {
                                  className: 'oi oi-account-logout',
                                  onClick: a,
                                })
                              )
                            )
                          )
                        )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        I = Object(E.c)(
          function(e) {
            return { userInfo: e.userInfo }
          },
          function(e) {
            return {
              userLogOut: function() {
                e(
                  (function() {
                    var e = Object(y.a)(
                      b.a.mark(function e(t) {
                        return b.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  x({ url: '/api/logout', method: 'get' })
                                )
                              case 2:
                                t({ type: C }), t(Object(N.d)('/login'))
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })()
                )
              },
            }
          }
        )(A),
        _ = a(279),
        D = a(275),
        F = a(268),
        L = a(142),
        G = a.n(L),
        B =
          (a(190),
          (function(e) {
            function t() {
              var e
              return (
                Object(s.a)(this, t),
                ((e = Object(u.a)(
                  this,
                  Object(l.a)(t).call(this)
                )).handleChangeForLogIn = function(t) {
                  var a = t.target.value
                  e.setState({ username: a })
                }),
                (e.handleChangeForPassword = function(t) {
                  var a = t.target.value
                  e.setState({ password: a })
                }),
                (e.state = { username: '', password: '' }),
                e
              )
            }
            return (
              Object(p.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.setUser,
                      n = t.error,
                      o = t.isError
                    return r.a.createElement(
                      'div',
                      null,
                      o &&
                        r.a.createElement(
                          G.a,
                          {
                            key: 1,
                            variant: 'danger',
                            className: 'alertForError',
                          },
                          n
                        ),
                      r.a.createElement(
                        _.a,
                        { className: 'cardItem' },
                        r.a.createElement(
                          _.a.Body,
                          null,
                          r.a.createElement(
                            D.a,
                            null,
                            r.a.createElement(
                              D.a.Group,
                              null,
                              r.a.createElement(D.a.Label, null, 'Login'),
                              r.a.createElement(D.a.Control, {
                                type: 'login',
                                value: this.state.username,
                                onChange: this.handleChangeForLogIn,
                                placeholder: 'Enter login',
                              })
                            ),
                            r.a.createElement(
                              D.a.Group,
                              null,
                              r.a.createElement(D.a.Label, null, 'Password'),
                              r.a.createElement(D.a.Control, {
                                type: 'password',
                                alue: this.state.password,
                                onChange: this.handleChangeForPassword,
                                placeholder: 'Password',
                              })
                            ),
                            r.a.createElement(
                              D.a.Group,
                              null,
                              r.a.createElement(D.a.Check, {
                                type: 'checkbox',
                                label: 'Check me out',
                              })
                            ),
                            r.a.createElement(
                              F.a,
                              {
                                variant: 'dark',
                                type: 'submit',
                                onClick: function(t) {
                                  a(e.state.username, e.state.password),
                                    t.preventDefault()
                                },
                              },
                              'Sign in'
                            )
                          )
                        )
                      )
                    )
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        U = Object(E.c)(w, T)(B),
        H = a(33),
        M = a(48),
        q = a(277),
        V = a(280),
        K = a(88),
        z = a.n(K),
        Y = a(86),
        J = a(274),
        W = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.confirm,
                    a = e.deny,
                    n = e.show
                  return r.a.createElement(
                    J.a,
                    { show: n, onHide: a, centered: !0 },
                    r.a.createElement(
                      J.a.Header,
                      null,
                      r.a.createElement(
                        J.a.Title,
                        null,
                        'You sure you want to delete this?'
                      )
                    ),
                    r.a.createElement(
                      J.a.Footer,
                      null,
                      r.a.createElement(
                        F.a,
                        { onClick: t, variant: 'info' },
                        'Sure'
                      ),
                      r.a.createElement(
                        F.a,
                        { onClick: a, variant: 'light' },
                        'Nope!'
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Q = a(269),
        X = a(143),
        Z = a(270)
      a(69)
      function $(e) {
        var t = e
        return (
          (t = [
            '0' + t.getDate(),
            '0' + (t.getMonth() + 1),
            '' + t.getFullYear(),
            '0' + t.getHours(),
            '0' + t.getMinutes(),
          ].map(function(e) {
            return e.slice(-2)
          }))
            .slice(0, 3)
            .join('.') +
          ', ' +
          t.slice(3).join(':')
        )
      }
      function ee(e, t) {
        var a = !1
        return function() {
          a ||
            (e.apply(this, arguments),
            (a = !0),
            setTimeout(function() {
              a = !1
            }, t))
        }
      }
      var te = '[HOME] GET_RIDES',
        ae = 'GET_HOME_RIDES_SUCCESS',
        ne = 'GET_HOME_RIDES_ERROR',
        re = 'POST_FAVOURITE_ROUTE',
        oe = 'POST_FAVOURITE_ROUTE_SUCCESS',
        ie = 'POST_FAVOURITE_ROUTE_ERROR'
      function se() {
        return { type: re }
      }
      function ce() {
        return { type: oe }
      }
      function ue(e) {
        return { type: ie, error: e }
      }
      var le = function(e) {
          return {
            userInfo: e.userInfo,
            passengerRides: e.home.homeRides.passengerRides,
            driverRides: e.home.homeRides.driverRides,
          }
        },
        pe = function(e) {
          return {
            requestRides: function() {
              return e(me())
            },
            addFavourite: function(t, a) {
              return e(de(t, a))
            },
            deleteFavourite: function(t) {
              return e(fe(t))
            },
          }
        },
        me = function() {
          return (function() {
            var e = Object(y.a)(
              b.a.mark(function e(t) {
                var a, n, r, o
                return b.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: te }),
                            (e.next = 4),
                            x({ url: '/api/home', method: 'get' })
                          )
                        case 4:
                          ;(a = e.sent),
                            (n = a.data),
                            (r = n.activeRoutes),
                            (o = n.bookings),
                            t({
                              type: ae,
                              payload: { driverRides: r, passengerRides: o },
                            }),
                            (e.next = 15)
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e.catch(0)),
                            t(((i = e.t0), { type: ne, error: i }))
                        case 15:
                        case 'end':
                          return e.stop()
                      }
                    var i
                  },
                  e,
                  null,
                  [[0, 12]]
                )
              })
            )
            return function(t) {
              return e.apply(this, arguments)
            }
          })()
        },
        de = function(e, t) {
          return (function() {
            var a = Object(y.a)(
              b.a.mark(function a(n) {
                return b.a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            n(se()),
                            (a.next = 4),
                            x({
                              url: '/api/favouriteRoute',
                              method: 'post',
                              data: { routeId: e, name: t },
                            })
                          )
                        case 4:
                          n(ce()), (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7), (a.t0 = a.catch(0)), n(ue(a.t0))
                        case 10:
                        case 'end':
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function(e) {
              return a.apply(this, arguments)
            }
          })()
        },
        fe = function(e) {
          return (function() {
            var t = Object(y.a)(
              b.a.mark(function t(a) {
                return b.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a(se()),
                            (t.next = 4),
                            x({
                              url: '/api/favouriteRoute/'.concat(e),
                              method: 'delete',
                            })
                          )
                        case 4:
                          a(ce()), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a(ue(t.t0))
                        case 10:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function(e) {
              return t.apply(this, arguments)
            }
          })()
        },
        he = (function(e) {
          function t() {
            var e
            return (
              Object(s.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(l.a)(t).call(this)
              )).delete = function() {
                e.setState({ confirm: !0 })
              }),
              (e.deny = function() {
                e.setState({ confirm: !1 })
              }),
              (e.state = { confirm: !1 }),
              e
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.badge,
                    a = void 0 === t ? '' : t,
                    n = e.styling,
                    o = void 0 === n ? '' : n,
                    i = e.id,
                    s = e.passenger,
                    c = this.props,
                    u = c.del,
                    l = c.onDel,
                    p = void 0 !== u
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      V.a.Item,
                      { className: o },
                      r.a.createElement(
                        Q.a,
                        null,
                        s
                          ? r.a.createElement(
                              X.a,
                              { xs: 'auto' },
                              r.a.createElement(ve, {
                                addFav: this.props.addFavourite,
                                id: i,
                              }),
                              ' '
                            )
                          : r.a.createElement(r.a.Fragment, null),
                        r.a.createElement(
                          X.a,
                          { sm: 7 },
                          this.props.depPoint,
                          ' ',
                          r.a.createElement('span', {
                            className: 'oi oi-arrow-right',
                          }),
                          ' ',
                          this.props.destPoint,
                          ' ',
                          r.a.createElement(Z.a, { variant: 'info' }, a),
                          r.a.createElement('br', null),
                          r.a.createElement('span', {
                            className: 'oi oi-clock',
                          }),
                          ' ',
                          $(new Date(this.props.depTime))
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          s &&
                            r.a.createElement(
                              v.a,
                              { to: 'routes/route-info/'.concat(i) },
                              r.a.createElement(
                                F.a,
                                { variant: 'outline-info', className: 'right' },
                                'Route Info'
                              )
                            ),
                          !s &&
                            r.a.createElement(
                              v.a,
                              { to: 'routes/ride-info/'.concat(i) },
                              r.a.createElement(
                                F.a,
                                { variant: 'outline-info', className: 'right' },
                                'Route Info'
                              )
                            ),
                          p
                            ? r.a.createElement(
                                F.a,
                                {
                                  variant: 'outline-danger',
                                  className: 'right',
                                  onClick: this.delete.bind(this),
                                },
                                'Delete'
                              )
                            : r.a.createElement(r.a.Fragment, null)
                        )
                      )
                    ),
                    r.a.createElement(W, {
                      show: this.state.confirm,
                      confirm: function() {
                        u(i), setTimeout(l, 1e3)
                      },
                      deny: this.deny.bind(this),
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        ve = (function(e) {
          function t() {
            var e
            return (
              Object(s.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(l.a)(t).call(this)
              )).click = function() {
                e.setState({ show: !0 })
              }),
              (e.send = function() {
                e.props.addFav(e.props.id, e.state.name),
                  e.setState({ show: !1 })
              }),
              (e.hide = function() {
                e.setState({ show: !1, name: '' })
              }),
              (e.handleChange = function(t) {
                var a = t.target.value
                a.length < 30 && e.setState(Object(Y.a)({}, t.target.name, a))
              }),
              (e.state = { show: !1, name: '' }),
              e
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      F.a,
                      {
                        variant: 'outline-info',
                        className: 'mid',
                        onClick: this.click,
                      },
                      r.a.createElement('span', { className: 'oi oi-star' })
                    ),
                    r.a.createElement(
                      J.a,
                      {
                        show: this.state.show,
                        centered: !0,
                        onHide: this.hide,
                      },
                      r.a.createElement(
                        J.a.Header,
                        null,
                        r.a.createElement(
                          J.a.Title,
                          null,
                          'Name your favourite Route'
                        )
                      ),
                      r.a.createElement(
                        J.a.Body,
                        null,
                        r.a.createElement(
                          D.a,
                          null,
                          r.a.createElement(D.a.Label, null, 'Routes Name'),
                          r.a.createElement(D.a.Control, {
                            name: 'name',
                            value: this.state.name,
                            onChange: this.handleChange,
                          })
                        )
                      ),
                      r.a.createElement(
                        J.a.Footer,
                        null,
                        r.a.createElement(
                          F.a,
                          { variant: 'info', onClick: this.send },
                          'Add to Favourites'
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ee = Object(E.c)(le, pe)(he),
        ge = (a(128), a(11)),
        be = 'GET_RIDES_DATA',
        ye = 'GET_RIDES_DATA_SUCCESS',
        Oe = 'GET_FAVOURITES_DATA_SUCCESS',
        je = 'GET_ACTIVE_ROUTES_DATA_SUCCESS',
        ke = 'GET_ACTIVE_BOOKINGS_DATA_SUCCESS',
        Ce = 'GET_RIDES_DATA_ERROR',
        Re = 'GET_ROUTES_HISTORY_SUCCESS',
        Se = 'GET_BOOKINGS_HISTORY_SUCCESS',
        Ne = 'CREATE_ROUTE_DATA',
        Pe = 'DELETE_RIDE',
        xe = 'DELETE_RIDE_SUCCESS',
        we = 'DELETE_RIDE_ERROR'
      function Te() {
        return { type: be }
      }
      function Ae(e) {
        return { type: Ce, error: e }
      }
      function Ie() {
        return { type: Pe }
      }
      function _e() {
        return { type: xe }
      }
      function De(e) {
        return { type: we, error: e }
      }
      var Fe = function(e) {
          return {
            rides: e.rides.rides,
            favourites: e.favourites.favourites,
            activeRoutes: e.activeRoutes.activeRoutes,
            activeBookings: e.activeBookings.activeBookings,
            routesHistory: e.routesHistory.routesHistory,
            bookingHistory: e.bookingHistory.bookingHistory,
          }
        },
        Le = function(e) {
          return {
            requestRides: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({
                                    url: '/api/profile/favouriteroutes',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: ye, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getFavourites: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({
                                    url: '/api/profile/favouriteroutes',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: Oe, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getActiveRoutes: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({ url: '/api/activeRoutes', method: 'get' })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: je, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getActiveBookings: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({ url: '/api/bookings', method: 'get' })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: ke, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getRoutesHistory: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({
                                    url: '/api/activeRoutes/history',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: Re, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getBookingsHistory: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(Te()),
                                  (e.next = 4),
                                  x({
                                    url: '/api/bookings/history',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: Se, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(Ae(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            createRoute: function(t, a) {
              return e(
                (function(e, t) {
                  return (function() {
                    var a = Object(y.a)(
                      b.a.mark(function a(n) {
                        var r
                        return b.a.wrap(
                          function(a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    n({ type: Ne }),
                                    (a.next = 4),
                                    e
                                  )
                                case 4:
                                  return (
                                    (r = a.sent),
                                    (a.next = 7),
                                    x({
                                      url: '/api/addRoute/',
                                      method: 'post',
                                      data: Object(ge.a)(
                                        {
                                          timeAndDate: t.time.toJSON(),
                                          maxSeats: t.seats,
                                          carId: t.carId,
                                          favourite: !1,
                                          favouriteRouteId: 0,
                                          routeURL: 0,
                                        },
                                        r
                                      ),
                                    })
                                  )
                                case 7:
                                  n({ type: Ne }), (a.next = 13)
                                  break
                                case 10:
                                  ;(a.prev = 10),
                                    (a.t0 = a.catch(0)),
                                    n(((o = a.t0), { type: Ne, error: o }))
                                case 13:
                                case 'end':
                                  return a.stop()
                              }
                            var o
                          },
                          a,
                          null,
                          [[0, 10]]
                        )
                      })
                    )
                    return function(e) {
                      return a.apply(this, arguments)
                    }
                  })()
                })(t, a)
              )
            },
            deleteRoute: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a(Ie()),
                                    (t.next = 4),
                                    x({
                                      url: '/api/deleteRoute',
                                      method: 'delete',
                                      data: JSON.stringify(e),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    })
                                  )
                                case 4:
                                  a(_e()), (t.next = 10)
                                  break
                                case 7:
                                  ;(t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    a(De(t.t0))
                                case 10:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
            deleteBooking: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a(Ie()),
                                    (t.next = 4),
                                    x({
                                      url: '/api/booking',
                                      method: 'delete',
                                      data: JSON.stringify(e),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    })
                                  )
                                case 4:
                                  a(_e()), (t.next = 10)
                                  break
                                case 7:
                                  ;(t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    a(De(t.t0))
                                case 10:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
          }
        },
        Ge = (function(e) {
          function t() {
            var e, a
            Object(s.a)(this, t)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
              o[i] = arguments[i]
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(o))
              )).refresh = function() {
                a.props.getActiveRoutes(), a.props.getActiveBookings()
              }),
              (a.active = function(e, t, n) {
                return r.a.createElement(Ee, {
                  depPoint: e.startPointName,
                  destPoint: e.finishPointName,
                  depTime: e.timeAndDate,
                  badge: ' Upcoming',
                  id: e.id,
                  key: e.id,
                  passenger: t,
                  del: n,
                  onDel: a.refresh.bind(Object(M.a)(a)),
                })
              }),
              (a.history = function(e, t) {
                return r.a.createElement(Ee, {
                  depPoint: e.startPointName,
                  destPoint: e.finishPointName,
                  depTime: e.timeAndDate,
                  badge: 'Finished',
                  styling: 'history',
                  id: e.id,
                  key: e.id,
                  passenger: t,
                })
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.getActiveRoutes(),
                    this.props.getActiveBookings(),
                    this.props.getRoutesHistory(),
                    this.props.getBookingsHistory()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.activeRoutes,
                    n = void 0 === a ? [] : a,
                    o = t.activeBookings,
                    i = void 0 === o ? [] : o,
                    s = t.routesHistory,
                    c = void 0 === s ? [] : s,
                    u = t.bookingHistory,
                    l = this.props,
                    p = l.isLoading,
                    m = l.deleteBooking,
                    d = l.deleteRoute,
                    f = n
                      .map(function(t) {
                        return e.active(t, !0, d)
                      })
                      .concat(
                        c.map(function(t) {
                          return e.history(t, !0)
                        })
                      ),
                    v = i
                      .map(function(t) {
                        return e.active(t, !1, m)
                      })
                      .concat(
                        u.map(function(t) {
                          return e.history(t, !1)
                        })
                      )
                  return p
                    ? r.a.createElement(z.a, null)
                    : r.a.createElement(
                        q.a.Container,
                        { defaultActiveKey: 'passenger' },
                        r.a.createElement(
                          h.a,
                          { justify: !0, variant: 'tabs' },
                          r.a.createElement(
                            h.a.Item,
                            { className: 'tabs' },
                            r.a.createElement(
                              h.a.Link,
                              { eventKey: 'passenger', className: 'text' },
                              'Passenger'
                            )
                          ),
                          r.a.createElement(
                            h.a.Item,
                            { className: 'tabs' },
                            r.a.createElement(
                              h.a.Link,
                              { eventKey: 'driver', className: 'text' },
                              'Driver'
                            )
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'scrollable' },
                          r.a.createElement(
                            q.a.Content,
                            null,
                            r.a.createElement(
                              q.a.Pane,
                              { eventKey: 'passenger' },
                              r.a.createElement(V.a, null, v)
                            ),
                            r.a.createElement(
                              q.a.Pane,
                              { eventKey: 'driver' },
                              r.a.createElement(V.a, null, f)
                            )
                          )
                        )
                      )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Be = Object(E.c)(Fe, Le)(Ge),
        Ue = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestRides()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.passengerRides,
                    a = e.driverRides,
                    n = this.props.userInfo.loading
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(Be, {
                      passengerRides: t,
                      driverRides: a,
                      isLoading: n,
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        He = Object(E.c)(le, pe)(Ue),
        Me = a(145),
        qe = a.n(Me),
        Ve = a(58),
        Ke = a.n(Ve),
        ze = (a(212), a(146)),
        Ye = a.n(ze),
        Je = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.userInfo
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        X.a,
                        { xs: 3 },
                        r.a.createElement(Ye.a, {
                          src:
                            'undefined' === typeof e.photoUrl
                              ? qe.a
                              : e.photoUrl,
                          roundedCircle: !0,
                          width: '160',
                          height: '160',
                        })
                      ),
                      r.a.createElement(
                        X.a,
                        { md: 'auto' },
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h3',
                            { className: 'textOverflow' },
                            e.username
                          ),
                          r.a.createElement(
                            'h5',
                            { className: 'textOverflow' },
                            e.phoneNumber
                          ),
                          r.a.createElement(
                            Q.a,
                            { className: 'mid' },
                            r.a.createElement(Ke.a, {
                              rating: 4.5,
                              starDimension: '21px',
                              starSpacing: '5px',
                            }),
                            ' ',
                            r.a.createElement(
                              'h4',
                              { className: 'left-marg' },
                              'as a Driver'
                            )
                          ),
                          r.a.createElement(
                            Q.a,
                            { className: 'mid' },
                            r.a.createElement(Ke.a, {
                              rating: 3.5,
                              starDimension: '21px',
                              starSpacing: '5px',
                            }),
                            ' ',
                            r.a.createElement(
                              'h4',
                              { className: 'left-marg' },
                              'as a Passenger'
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        We = Object(E.c)(w, T)(Je),
        Qe = 'GET_CARS_DATA',
        Xe = 'GET_CARS_DATA_SUCCESS',
        Ze = 'GET_CARS_DATA_ERROR',
        $e = 'PUT_CARS_DATA',
        et = 'PUT_CARS_DATA_SUCCESS',
        tt = 'PUT_CARS_DATA_ERROR',
        at = 'POST_CARS_DATA',
        nt = 'POST_CARS_DATA_SUCCESS',
        rt = 'POST_CARS_DATA_ERROR',
        ot = 'DELETE_CARS_DATA',
        it = 'DELETE_CARS_DATA_SUCCESS',
        st = 'DELETE_CARS_DATA_ERROR'
      function ct() {
        return { type: Qe }
      }
      function ut(e) {
        return { type: Xe, payload: e }
      }
      function lt(e) {
        return { type: Ze, error: e }
      }
      var pt = function(e) {
          return { cars: e.cars.cars }
        },
        mt = function(e) {
          return {
            requestCars: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(ct()),
                                  (e.next = 4),
                                  x({ url: '/api/profile/cars', method: 'get' })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t(ut(n)),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(lt(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            getCars: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t(ct()),
                                  (e.next = 4),
                                  x({
                                    url: '/api/newroute/cars',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t(ut(n)),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9), (e.t0 = e.catch(0)), t(lt(e.t0))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            editCar: function(t, a) {
              return e(
                (function(e, t) {
                  return (function() {
                    var a = Object(y.a)(
                      b.a.mark(function a(n) {
                        return b.a.wrap(
                          function(a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    n({ type: $e }),
                                    (a.next = 4),
                                    x({
                                      url: '/api/profile/cars/'.concat(e),
                                      method: 'put',
                                      data: { id: e, carInformation: t },
                                    })
                                  )
                                case 4:
                                  n({ type: et }), (a.next = 10)
                                  break
                                case 7:
                                  ;(a.prev = 7),
                                    (a.t0 = a.catch(0)),
                                    n(((r = a.t0), { type: tt, error: r }))
                                case 10:
                                case 'end':
                                  return a.stop()
                              }
                            var r
                          },
                          a,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return a.apply(this, arguments)
                    }
                  })()
                })(t, a)
              )
            },
            addCar: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: at }),
                                    (t.next = 4),
                                    x({
                                      url: '/api/profile/cars/',
                                      method: 'post',
                                      data: e,
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    })
                                  )
                                case 4:
                                  a({ type: nt }), (t.next = 10)
                                  break
                                case 7:
                                  ;(t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    a(((n = t.t0), { type: rt, error: n }))
                                case 10:
                                case 'end':
                                  return t.stop()
                              }
                            var n
                          },
                          t,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
            deleteCar: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: ot }),
                                    (t.next = 4),
                                    x({
                                      url: '/api/profile/cars/'.concat(e),
                                      method: 'delete',
                                    })
                                  )
                                case 4:
                                  a({ type: it }), (t.next = 10)
                                  break
                                case 7:
                                  ;(t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    a(((n = t.t0), { type: st, error: n }))
                                case 10:
                                case 'end':
                                  return t.stop()
                              }
                            var n
                          },
                          t,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
          }
        },
        dt = a(271),
        ft = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).click = function() {
                var e = a.props.id,
                  t = a.state.info
                a.props.new ? a.props.addCar(t) : a.props.editCar(e, t),
                  a.hide()
              }),
              (a.textChange = function(e) {
                var t = e.target.value
                t.length < 185
                  ? a.setState({ info: t, isError: !1 })
                  : a.setState({
                      isError: !0,
                      error: 'Your description is too long!',
                    })
              }),
              (a.hide = function() {
                a.props.hide(), a.setState({ info: '' })
              }),
              (a.state = { info: e.info || '', isError: !1, error: '' }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.hide,
                    t = this.state,
                    a = t.isError,
                    n = t.error,
                    o = this.props.new ? 'Add New Car' : 'Edit Car'
                  return r.a.createElement(
                    J.a,
                    { show: this.props.show, centered: !0, onHide: e },
                    a &&
                      r.a.createElement(
                        dt.a,
                        { key: 1, variant: 'danger', className: 'wide' },
                        n
                      ),
                    r.a.createElement(
                      J.a.Header,
                      null,
                      r.a.createElement(J.a.Title, null, o)
                    ),
                    r.a.createElement(
                      J.a.Body,
                      null,
                      r.a.createElement(
                        D.a,
                        null,
                        r.a.createElement(
                          D.a.Label,
                          null,
                          "Your Car's Descrption"
                        ),
                        r.a.createElement(D.a.Control, {
                          as: 'textarea',
                          rows: '4',
                          value: this.state.info,
                          onChange: this.textChange,
                        })
                      )
                    ),
                    r.a.createElement(
                      J.a.Footer,
                      null,
                      r.a.createElement(
                        F.a,
                        { variant: 'info', onClick: this.click },
                        'Save'
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        ht = Object(E.c)(pt, mt)(ft),
        vt = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).hide = function() {
                a.props.hide(), a.setState({ show: !1 }), a.render()
              }),
              (a.delete = function() {
                a.props.deleteCar(a.props.id), a.props.hide()
              }),
              (a.deny = function() {
                a.setState({ confirm: !1 })
              }),
              (a.confirm = function() {
                a.setState({ confirm: !0 })
              }),
              (a.state = { show: e.show, confirm: !1 }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.id,
                    n = t.info
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      V.a.Item,
                      { key: a },
                      r.a.createElement(
                        Q.a,
                        null,
                        r.a.createElement(X.a, { xs: 6 }, n),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(
                            F.a,
                            {
                              variant: 'outline-info',
                              className: 'right',
                              onClick: function() {
                                e.setState({ show: !0 })
                              },
                            },
                            'Edit'
                          ),
                          r.a.createElement(
                            F.a,
                            {
                              variant: 'outline-danger',
                              className: 'right',
                              onClick: this.confirm.bind(this),
                            },
                            'Delete'
                          )
                        )
                      )
                    ),
                    r.a.createElement(ht, {
                      new: !1,
                      show: this.state.show,
                      hide: this.hide.bind(this),
                      id: a,
                      info: n,
                    }),
                    r.a.createElement(W, {
                      show: this.state.confirm,
                      confirm: this.delete.bind(this),
                      deny: this.deny.bind(this),
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Et = Object(E.c)(pt, mt)(vt),
        gt = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).hide = function() {
                var e = a.props.requestCars
                setTimeout(e, 1e3), a.setState({ show: !1 })
              }),
              (a.state = { show: !1 }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestCars()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.cars,
                    a = (void 0 === t ? [] : t).map(function(t) {
                      var a = t.carInformation
                      return r.a.createElement(Et, {
                        id: t.id,
                        info: a,
                        hide: e.hide.bind(e),
                        key: t.id,
                      })
                    })
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      V.a,
                      null,
                      a,
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          F.a,
                          {
                            variant: 'outline-info',
                            onClick: function() {
                              e.setState({ show: !0 })
                            },
                            className: 'butt',
                          },
                          'Add Car'
                        )
                      )
                    ),
                    r.a.createElement(ht, {
                      new: !0,
                      show: this.state.show,
                      hide: this.hide.bind(this),
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        bt = Object(E.c)(pt, mt)(gt),
        yt = (function(e) {
          function t() {
            var e
            return (
              Object(s.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(l.a)(t).call(this)
              )).confirm = function() {
                e.setState({ confirm: !0 })
              }),
              (e.deny = function() {
                e.setState({ confirm: !1 })
              }),
              (e.delete = function() {
                e.props.deleteFavourite(e.props.id), e.props.finish()
              }),
              (e.state = { confirm: !1 }),
              e
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      V.a.Item,
                      {
                        onClick: function() {
                          return e.props.getRide(e.props.id)
                        },
                      },
                      r.a.createElement(
                        Q.a,
                        null,
                        r.a.createElement(
                          X.a,
                          { xs: 3 },
                          this.props.name,
                          ' :'
                        ),
                        r.a.createElement(
                          X.a,
                          { xs: 'auto' },
                          ' ',
                          this.props.depPoint,
                          ' ',
                          r.a.createElement('span', {
                            className: 'oi oi-arrow-right',
                          }),
                          ' ',
                          this.props.destPoint
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(
                            F.a,
                            {
                              onClick: this.confirm.bind(this),
                              variant: 'outline-danger',
                              className: 'right',
                            },
                            'Delete'
                          )
                        )
                      )
                    ),
                    r.a.createElement(W, {
                      show: this.state.confirm,
                      deny: this.deny.bind(this),
                      confirm: this.delete.bind(this),
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ot = Object(E.c)(le, pe)(yt),
        jt = (function(e) {
          function t() {
            var e, a
            Object(s.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(r))
              )).finish = function() {
                setTimeout(a.props.getFavourites, 1e3)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.getFavourites()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.favourites,
                    a = (void 0 === t ? [] : t).map(function(t) {
                      return r.a.createElement(Ot, {
                        key: t.id,
                        depPoint: t.startPointName,
                        destPoint: t.endPointName,
                        name: t.name,
                        id: t.id,
                        finish: e.finish.bind(e),
                      })
                    })
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(We, null),
                    r.a.createElement(
                      q.a.Container,
                      { defaultActiveKey: 'favroutes' },
                      r.a.createElement(
                        h.a,
                        { fill: !0, variant: 'tabs' },
                        r.a.createElement(
                          h.a.Item,
                          { className: 'tabs' },
                          r.a.createElement(
                            h.a.Link,
                            { eventKey: 'favroutes', className: 'text' },
                            'My Favorite Routes'
                          )
                        ),
                        r.a.createElement(
                          h.a.Item,
                          { className: 'tabs' },
                          r.a.createElement(
                            h.a.Link,
                            { eventKey: 'cars', className: 'text' },
                            'My Cars'
                          )
                        )
                      ),
                      r.a.createElement(
                        q.a.Content,
                        null,
                        r.a.createElement(
                          q.a.Pane,
                          { eventKey: 'favroutes' },
                          0 === a.length
                            ? r.a.createElement(
                                'div',
                                { className: 'noStuff' },
                                'No favourites yet'
                              )
                            : r.a.createElement(V.a, null, a)
                        ),
                        r.a.createElement(
                          q.a.Pane,
                          { eventKey: 'cars' },
                          r.a.createElement(bt, null)
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        kt = Object(E.c)(Fe, Le)(jt),
        Ct = a(272),
        Rt =
          (a(129),
          r.a.Component,
          a(213),
          function() {
            return r.a.createElement(z.a, {
              animation: 'grow',
              variant: 'info',
              className: 'spinner',
            })
          }),
        St = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.passengerRides,
                    a = void 0 === t ? [] : t,
                    n = e.driverRides,
                    o = void 0 === n ? [] : n,
                    i = this.props.isLoading,
                    s = a.map(function(e) {
                      return r.a.createElement(Ee, {
                        id: e.id,
                        passenger: !1,
                        key: e.id,
                        depPoint: e.startPointName,
                        destPoint: e.finishPointName,
                        depTime: e.timeAndDate,
                      })
                    }),
                    c = o.map(function(e) {
                      return r.a.createElement(Ee, {
                        id: e.id,
                        passenger: !0,
                        key: e.id,
                        depPoint: e.startPointName,
                        destPoint: e.finishPointName,
                        depTime: new Date(e.timeAndDate),
                      })
                    })
                  return i
                    ? r.a.createElement(Rt, null)
                    : r.a.createElement(
                        Q.a,
                        null,
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(
                            Ct.a,
                            { className: 'center' },
                            r.a.createElement(
                              v.a,
                              { to: '/home/new-route', className: 'sep' },
                              r.a.createElement(
                                F.a,
                                { variant: 'info', className: 'sep' },
                                'Add new route as a driver'
                              )
                            ),
                            ' '
                          ),
                          r.a.createElement(V.a, null, c)
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(
                            Ct.a,
                            { className: 'center' },
                            r.a.createElement(
                              v.a,
                              { to: '/home/new-ride', className: 'sep' },
                              r.a.createElement(
                                F.a,
                                { variant: 'info', className: 'sep' },
                                'Add new route as a passenger'
                              )
                            )
                          ),
                          r.a.createElement(V.a, null, s)
                        )
                      )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Nt = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestRides()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.passengerRides,
                    a = e.driverRides,
                    n = this.props.userInfo.loading
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(St, {
                      passengerRides: t,
                      driverRides: a,
                      isLoading: n,
                    })
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Pt = Object(E.c)(le, pe)(Nt),
        xt = (a(214), a(147)),
        wt = a.n(xt),
        Tt = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.getRide,
                    a = this.props.rides,
                    n = a.map(function(a) {
                      return e.props.favourites
                        ? r.a.createElement(Ot, {
                            key: a.routeId,
                            id: a.routeId,
                            name: a.name,
                            depPoint: a.startPointName,
                            destPoint: a.endPointName,
                            getRide: t,
                          })
                        : r.a.createElement(
                            V.a.Item,
                            {
                              key: a.id,
                              onClick: function() {
                                t(a.id), e.props.setId(a.id)
                              },
                            },
                            a.startPointName,
                            ' ',
                            r.a.createElement('span', {
                              className: 'oi oi-arrow-right',
                            }),
                            ' ',
                            a.finishPointName,
                            r.a.createElement('br', null),
                            ' Time: ',
                            $(new Date(a.timeAndDate))
                          )
                    })
                  return r.a.createElement(
                    wt.a,
                    { dataLength: a.length, height: 300 },
                    r.a.createElement(
                      V.a,
                      {
                        title: this.props.type,
                        variant: 'outline-dark',
                        className: 'listStyle',
                      },
                      n
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        At = a(148),
        It = a.n(At),
        _t = (function(e) {
          function t() {
            var e, a
            Object(s.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(r))
              )).state = { date: new Date() }),
              (a.onChange = function(e) {
                a.setState({ date: e }), a.props.onChange(e)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'date-selector' },
                    r.a.createElement(It.a, {
                      onChange: this.onChange,
                      value: this.state.date,
                    })
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        Dt = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).changeCar = function(e) {
                var t = e.target.value
                a.setState({ carId: t }), a.props.onCar(t)
              }),
              (a.state = { from: a.props.from, to: a.props.to, carId: '' }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestCars()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.cars,
                    t = (void 0 === e ? [] : e).map(function(e) {
                      return r.a.createElement(
                        'option',
                        { key: e.id, value: e.id },
                        e.carInformation
                      )
                    })
                  return r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement('h3', null, 'New route:'),
                    r.a.createElement(
                      D.a,
                      null,
                      r.a.createElement(
                        D.a.Group,
                        { as: Q.a },
                        r.a.createElement(
                          D.a.Label,
                          { column: !0, sm: '2' },
                          'From:'
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(D.a.Control, {
                            type: 'text',
                            value: this.state.from,
                            readOnly: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        D.a.Group,
                        { as: Q.a },
                        r.a.createElement(
                          D.a.Label,
                          { column: !0, sm: '2' },
                          'To:'
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(D.a.Control, {
                            type: 'text',
                            value: this.state.to,
                            readOnly: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        D.a.Group,
                        { as: Q.a },
                        r.a.createElement(
                          D.a.Label,
                          { column: !0, sm: '2' },
                          'Time:'
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(_t, { onChange: this.props.onTime })
                        )
                      ),
                      r.a.createElement(
                        D.a.Group,
                        { as: Q.a, controlId: 'formGridState' },
                        r.a.createElement(
                          D.a.Label,
                          { column: !0, sm: '2' },
                          'Car:'
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(
                            D.a.Control,
                            {
                              as: 'select',
                              defaulvalue: this.state.carId,
                              onChange: this.changeCar,
                            },
                            t
                          )
                        )
                      ),
                      r.a.createElement(
                        D.a.Group,
                        { as: Q.a },
                        r.a.createElement(
                          D.a.Label,
                          { column: !0, sm: '2' },
                          'Seats:'
                        ),
                        r.a.createElement(
                          X.a,
                          null,
                          r.a.createElement(D.a.Control, {
                            type: 'text',
                            onChange: this.props.onSeats,
                          })
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ft = Object(E.c)(pt, mt)(Dt),
        Lt = a(151),
        Gt = a(67),
        Bt = a(108),
        Ut =
          (a(258),
          (function(e) {
            function t() {
              var e
              return (
                Object(s.a)(this, t),
                ((e = Object(u.a)(
                  this,
                  Object(l.a)(t).call(this)
                )).addPlacemark = (function() {
                  var t = Object(y.a)(
                    b.a.mark(function t(a) {
                      var n, r, o, i, s
                      return b.a.wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((n = a.get('coords')), !e.isA)) {
                                t.next = 23
                                break
                              }
                              if (!e.pointA) {
                                t.next = 12
                                break
                              }
                              return (
                                e.pointA.geometry.setCoordinates(n),
                                (t.next = 6),
                                e.getAddress(e.pointA.geometry.getCoordinates())
                              )
                            case 6:
                              ;(r = t.sent),
                                e.pointA.properties.set({ balloonContent: r }),
                                e.props.changeDepPoint(r),
                                e.pointB && e.route,
                                (t.next = 20)
                              break
                            case 12:
                              return (
                                (e.pointA = e.createPlacemark(n)),
                                e.map.geoObjects.add(e.pointA),
                                (t.next = 16),
                                e.getAddress(e.pointA.geometry.getCoordinates())
                              )
                            case 16:
                              ;(o = t.sent),
                                e.pointA.properties.set({
                                  iconCaption:
                                    '\u0442\u043e\u0447\u043a\u0430 \u0410',
                                  balloonContent: o,
                                }),
                                e.props.changeDepPoint(o),
                                e.pointA.events.add(
                                  'dragend',
                                  Object(y.a)(
                                    b.a.mark(function e() {
                                      var t
                                      return b.a.wrap(
                                        function(e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  this.getAddress(
                                                    this.pointA.geometry.getCoordinates()
                                                  )
                                                )
                                              case 2:
                                                ;(t = e.sent),
                                                  this.pointA.properties.set({
                                                    balloonContent: t,
                                                  }),
                                                  this.props.changeDepPoint(t)
                                              case 5:
                                              case 'end':
                                                return e.stop()
                                            }
                                        },
                                        e,
                                        this
                                      )
                                    })
                                  ).bind(Object(M.a)(e))
                                )
                            case 20:
                              ;(e.isA = !1), (t.next = 41)
                              break
                            case 23:
                              if (!e.pointB) {
                                t.next = 32
                                break
                              }
                              return (
                                e.pointB.geometry.setCoordinates(n),
                                (t.next = 27),
                                e.getAddress(e.pointB.geometry.getCoordinates())
                              )
                            case 27:
                              ;(i = t.sent),
                                e.pointB.properties.set({ balloonContent: i }),
                                e.props.changeDestPoint(i),
                                (t.next = 40)
                              break
                            case 32:
                              return (
                                (e.pointB = e.createPlacemark(n)),
                                e.map.geoObjects.add(e.pointB),
                                (t.next = 36),
                                e.getAddress(e.pointB.geometry.getCoordinates())
                              )
                            case 36:
                              ;(s = t.sent),
                                e.pointB.properties.set({
                                  iconCaption:
                                    '\u0442\u043e\u0447\u043a\u0430 B',
                                  balloonContent: s,
                                }),
                                e.props.changeDestPoint(s),
                                e.pointB.events.add(
                                  'dragend',
                                  Object(y.a)(
                                    b.a.mark(function e() {
                                      var t
                                      return b.a.wrap(
                                        function(e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  this.getAddress(
                                                    this.pointB.geometry.getCoordinates()
                                                  )
                                                )
                                              case 2:
                                                ;(t = e.sent),
                                                  this.pointB.properties.set({
                                                    balloonContent: t,
                                                  }),
                                                  this.props.changeDestPoint(t)
                                              case 5:
                                              case 'end':
                                                return e.stop()
                                            }
                                        },
                                        e,
                                        this
                                      )
                                    })
                                  ).bind(Object(M.a)(e))
                                )
                            case 40:
                              e.isA = !0
                            case 41:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )
                  return function(e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (e.componentWillReceiveProps = function(t) {
                  if (
                    e.map &&
                    t.showing &&
                    !!Object.keys(t.showing).length &&
                    !(function e(t, a) {
                      if (t === a) return !0
                      if (
                        'object' === typeof t &&
                        null != t &&
                        'object' === typeof a &&
                        null != a
                      ) {
                        if (Object.keys(t).length !== Object.keys(a).length)
                          return !1
                        for (var n in t) {
                          if (!a.hasOwnProperty(n)) return !1
                          if (!e(t[n], a[n])) return !1
                        }
                        return !0
                      }
                      return !1
                    })(e.props.showing, t.showing)
                  ) {
                    var a = e.ymaps.templateLayoutFactory.createClass(
                        '<div>Test</div>'
                      ),
                      n = t.showing.viaPoints || []
                    e.ymaps
                      .route(
                        [t.showing.startPoint].concat(
                          Object(Gt.a)(
                            n.map(function(e) {
                              return { type: 'viaPoint', point: e }
                            })
                          ),
                          [t.showing.finishPoint]
                        ),
                        { balloonContentBodyLayout: a }
                      )
                      .then(function(t) {
                        t
                          .getPaths()
                          .options.set({
                            strokeColor: '0000ffff',
                            opacity: 0.9,
                          }),
                          t.options.set({ mapStateAutoApply: !0 }),
                          e.map.geoObjects.remove(e.route),
                          (e.route = t),
                          e.map.geoObjects.add(e.route)
                      })
                  }
                }),
                (e.getRouteInfo = Object(y.a)(
                  b.a.mark(function t() {
                    var a, n, r, o, i, s, c, u, l, p, m, d, f, h, v
                    return b.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.map) {
                              t.next = 3
                              break
                            }
                            return (
                              alert("There's no map, my Lord."),
                              t.abrupt('return')
                            )
                          case 3:
                            if (
                              ((a = []),
                              (n = e.map.controls
                                .get('routeEditor')
                                .getRoute()))
                            ) {
                              t.next = 8
                              break
                            }
                            return (
                              alert("There's no route, my Lord."),
                              t.abrupt('return')
                            )
                          case 8:
                            if (
                              ((r = n.getLength()),
                              (o = n.getTime()),
                              (i = n
                                .getViaPoints()
                                .toArray()
                                .map(function(e) {
                                  return e.geometry.getCoordinates()
                                })),
                              (s = n.getPaths()),
                              0 !== (c = s.getLength()))
                            ) {
                              t.next = 16
                              break
                            }
                            return (
                              alert("There's no route, my Lord."),
                              t.abrupt('return')
                            )
                          case 16:
                            for (u = 0; u < c - 1; ++u)
                              s.get(u)
                                .getSegments()
                                .forEach(function(e) {
                                  a.push(e.getCoordinates()[0])
                                })
                            for (
                              l = s.get(c - 1).getSegments(),
                                p = l.length,
                                m = 0;
                              m < p - 1;
                              ++m
                            )
                              a.push(l[m].getCoordinates()[0])
                            return (
                              a.push.apply(
                                a,
                                Object(Gt.a)(l[p - 1].getCoordinates())
                              ),
                              (t.next = 23),
                              Promise.all([
                                e.getAddress(a[0]),
                                e.getAddress(a[a.length - 1]),
                              ])
                            )
                          case 23:
                            return (
                              (d = t.sent),
                              (f = Object(Lt.a)(d, 2)),
                              (h = f[0]),
                              (v = f[1]),
                              t.abrupt('return', {
                                startPoint: a[0],
                                finishPoint: a[a.length - 1],
                                startPointName: h,
                                finishPointName: v,
                                wayPoints: a,
                                viaPoints: i,
                                distance: r,
                                duration: o,
                              })
                            )
                          case 28:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )),
                (e.getEndPoints = Object(y.a)(
                  b.a.mark(function t() {
                    var a, n
                    return b.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((e.route = e.map.controls
                                .get('routeEditor')
                                .getRoute()),
                              !e.route)
                            ) {
                              t.next = 11
                              break
                            }
                            if (
                              2 !==
                              (a = e.route.getWayPoints().toArray()).length
                            ) {
                              t.next = 11
                              break
                            }
                            return (
                              (n = (function() {
                                var t = Object(y.a)(
                                  b.a.mark(function t() {
                                    return b.a.wrap(function(t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.t0 = e.props),
                                              (t.next = 3),
                                              Promise.all(
                                                e.route
                                                  .getWayPoints()
                                                  .toArray()
                                                  .map(function(t) {
                                                    return e.getAddress(
                                                      t.geometry.getCoordinates()
                                                    )
                                                  })
                                              )
                                            )
                                          case 3:
                                            return (
                                              (t.t1 = t.sent),
                                              t.abrupt(
                                                'return',
                                                t.t0.handleChange.call(
                                                  t.t0,
                                                  t.t1
                                                )
                                              )
                                            )
                                          case 5:
                                          case 'end':
                                            return t.stop()
                                        }
                                    }, t)
                                  })
                                )
                                return function() {
                                  return t.apply(this, arguments)
                                }
                              })()),
                              e.route.events.add('geometrychange', ee(n, 200)),
                              (t.t0 = e.props),
                              (t.next = 9),
                              Promise.all(
                                a.map(function(t) {
                                  return e.getAddress(
                                    t.geometry.getCoordinates()
                                  )
                                })
                              )
                            )
                          case 9:
                            ;(t.t1 = t.sent), t.t0.handleChange.call(t.t0, t.t1)
                          case 11:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )),
                (e.onApiAvailable = function(t) {
                  if (((e.ymaps = t), e.map && e.props.needRouteEditor)) {
                    e.map.controls
                      .add('routeEditor')
                      .events.add('deselect', e.getEndPoints)
                    var a = new e.ymaps.control.Button({
                      data: {
                        content: 'Clear map',
                        title: 'Click to clear the map',
                      },
                      options: { selectOnClick: !1 },
                    })
                    a.events.add('click', function() {
                      e.map.controls.get('routeEditor').select(),
                        e.props.handleChange(['', '']),
                        (e.route = null)
                    }),
                      e.map.controls.add(a, { float: 'left' })
                  }
                  if (e.map && e.props.needPlacemarks) {
                    e.map.events.add('click', e.addPlacemark)
                    var n = new e.ymaps.control.Button({
                      data: {
                        content: 'Clear map',
                        title: 'Click to clear the map',
                      },
                      options: { selectOnClick: !1 },
                    })
                    n.events.add('click', function() {
                      e.map.geoObjects.removeAll(),
                        e.props.changeDepPoint(''),
                        e.props.changeDestPoint(''),
                        (e.pointA = null),
                        (e.pointB = null),
                        (e.isA = !0),
                        (e.route = null)
                    }),
                      e.map.controls.add(n, { float: 'left' })
                  }
                  if (e.props && e.props.passengerInfo) {
                    console.log(e.props)
                    var r = e.ymaps.templateLayoutFactory.createClass(
                        '<div>Test</div>'
                      ),
                      o = e.props.passengerInfo.viaPoints || []
                    e.ymaps
                      .route(
                        [e.props.passengerInfo.startPoint].concat(
                          Object(Gt.a)(
                            o.map(function(e) {
                              return { type: 'viaPoint', point: e }
                            })
                          ),
                          [e.props.passengerInfo.finishPoint]
                        ),
                        { balloonContentBodyLayout: r }
                      )
                      .then(function(t) {
                        t
                          .getPaths()
                          .options.set({
                            strokeColor: '0000ffff',
                            opacity: 0.9,
                          }),
                          t.options.set({ mapStateAutoApply: !0 }),
                          (e.route = t),
                          e.map.geoObjects.add(t)
                      })
                  }
                  if (e.props && e.props.driverInfo) {
                    var i = e.ymaps.templateLayoutFactory.createClass(
                        '<div>Test</div>'
                      ),
                      s = e.props.driverInfo.viaPoints || []
                    e.ymaps
                      .route(
                        [e.props.driverInfo.startPoint].concat(
                          Object(Gt.a)(
                            s.map(function(e) {
                              return { type: 'viaPoint', point: e }
                            })
                          ),
                          [e.props.driverInfo.finishPoint]
                        ),
                        { balloonContentBodyLayout: i }
                      )
                      .then(function(t) {
                        t
                          .getPaths()
                          .options.set({
                            strokeColor: '0000ffff',
                            opacity: 0.9,
                          }),
                          t.options.set({ mapStateAutoApply: !0 }),
                          (e.route = t),
                          e.map.geoObjects.add(t)
                      })
                  }
                }),
                (e.map = null),
                (e.ymaps = null),
                (e.route = null),
                (e.pointA = null),
                (e.pointB = null),
                (e.isA = !0),
                e
              )
            }
            return (
              Object(p.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'createPlacemark',
                  value: function(e) {
                    return new this.ymaps.Placemark(
                      e,
                      { iconCaption: '\u043f\u043e\u0438\u0441\u043a...' },
                      {
                        preset: 'islands#blueDotIconWithCaption',
                        draggable: !0,
                      }
                    )
                  },
                },
                {
                  key: 'getPoints',
                  value: function() {
                    if (this.pointA && this.pointB)
                      return [
                        this.pointA.geometry.getCoordinates(),
                        this.pointB.geometry.getCoordinates(),
                      ]
                  },
                },
                {
                  key: 'getAddress',
                  value: function(e) {
                    return this.ymaps.geocode(e).then(function(e) {
                      return e.geoObjects
                        .get(0)
                        .properties.get('name')
                        .toString()
                    })
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return r.a.createElement(
                      Bt.b,
                      {
                        query: {
                          apikey: 'bc323490-dd90-4c2a-a14b-52d16caaa720',
                          ns: 'use-load-option',
                          load: 'package.full',
                        },
                      },
                      r.a.createElement(Bt.a, {
                        instanceRef: function(t) {
                          e.map = t
                        },
                        onLoad: function(t) {
                          return e.onApiAvailable(t)
                        },
                        className: 'maps-wrapper',
                        defaultState: {
                          center: [53.9, 27.56],
                          zoom: 11,
                          controls: ['zoomControl', 'fullscreenControl'],
                        },
                      })
                    )
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        Ht = a(45),
        Mt = a(149),
        qt = a(27),
        Vt = {
          username: '',
          role: '',
          loading: !1,
          checked: !1,
          error: '',
          photoUrl: '',
          phoneNumber: '',
          ratingDriver: 0,
          ratingPassenger: 0,
        }
      var Kt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Vt,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case O:
              return Object(ge.a)({}, e, { loading: !0, checked: !0 })
            case j:
              var a = t.payload,
                n = a.username,
                r = a.role,
                o = a.photoUrl,
                i = a.ratingDriver,
                s = a.ratingPassenger,
                c = a.phoneNumber
              return Object(ge.a)({}, e, {
                loading: !1,
                checked: !0,
                error: '',
                username: n,
                role: r,
                photoUrl: o,
                ratingDriver: i,
                ratingPassenger: s,
                phoneNumber: c,
              })
            case k:
              var u = t.error.message
              return Object(ge.a)({}, e, { loading: !1, checked: !1, error: u })
            case C:
              return Object(ge.a)({}, Vt)
            default:
              return e
          }
        },
        zt = a(43),
        Yt = {
          rides: [],
          favourites: [],
          activeRoutes: [],
          activeBookings: [],
          routesHistory: [],
          bookingHistory: [],
        }
      var Jt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Yt,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case be:
              return Object(ge.a)({}, e)
            case ye:
              var a = t.payload
              return Object(ge.a)({}, e, { rides: a })
            case Oe:
              var n = t.payload
              return Object(ge.a)({}, e, { favourites: n })
            case je:
              var r = t.payload
              return Object(ge.a)({}, e, { activeRoutes: r })
            case ke:
              var o = t.payload
              return Object(ge.a)({}, e, { activeBookings: o })
            case Re:
              var i = t.payload
              return Object(ge.a)({}, e, { routesHistory: i })
            case Se:
              var s = t.payload
              return Object(ge.a)({}, e, { bookingHistory: s })
            case Ce:
              var c = t.error
              return Object(ge.a)({}, e, { error: c })
            case Pe:
            case xe:
              return Object(ge.a)({}, e)
            case we:
              var u = t.error
              return Object(ge.a)({}, e, { error: u })
            default:
              return e
          }
        },
        Wt = 'GET_ACTIVE_RIDES_DATA',
        Qt = 'GET_ACTIVE_RIDES_DATA_SUCCESS',
        Xt = 'GET_ACTIVE_RIDES_DATA_ERROR',
        Zt = 'GET_RIDE_DATA',
        $t = 'GET_RIDE_DATA_SUCCESS',
        ea = 'GET_RIDE_DATA_ERROR',
        ta = 'VERIFY_POINTS_DATA',
        aa = 'VERIFY_POINTS_SUCCESS',
        na = 'VERIFY_POINTS_ERROR'
      function ra() {
        return { type: ta }
      }
      function oa() {
        return { type: aa }
      }
      function ia(e) {
        return { type: na, error: e }
      }
      var sa = { activeRides: [], currentRide: {} }
      var ca = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : sa,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case Wt:
              return Object(ge.a)({}, e)
            case Qt:
              var a = t.payload
              return Object(ge.a)({}, e, { activeRides: a })
            case Xt:
              var n = t.error
              return Object(ge.a)({}, e, { error: n })
            case Zt:
              return Object(ge.a)({}, e)
            case $t:
              var r = t.payload
              return Object(ge.a)({}, e, { currentRide: r })
            case ea:
              var o = t.error
              return Object(ge.a)({}, e, { error: o })
            case ta:
              return Object(ge.a)({}, e)
            case aa:
              return Object(ge.a)({}, e, { currentRide: r })
            case na:
              var i = t.error
              return Object(ge.a)({}, e, { error: i })
            default:
              return e
          }
        },
        ua = {
          homeRides: { passengerRides: [], driverRides: [] },
          loading: !1,
          error: '',
        }
      var la = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ua,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case te:
              return Object(ge.a)({}, e, { loading: !0 })
            case ae:
              return Object(ge.a)({}, e, {
                loading: !1,
                homeRides: Object(ge.a)({}, t.payload),
              })
            case ne:
              var a = t.error
              return Object(ge.a)({}, e, { loading: !1, error: a })
            default:
              return e
          }
        },
        pa = 'GET_PASSENGERS_DATA',
        ma = 'GET_PASSENGERS_DATA_SUCCESS',
        da = 'GET_PASSENGERS_DATA_ERROR',
        fa = 'SET_RATING',
        ha = 'SET_RATING_SUCCESS',
        va = 'SET_RATING_ERROR'
      var Ea = {
        passengers: [],
        maxSeats: '',
        freeSeats: '',
        startPointName: '',
        finishPointName: '',
      }
      var ga = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ea,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case pa:
              return Object(ge.a)({}, e)
            case ma:
              var a = t.payload,
                n = t.payload,
                r = n.freeSeats,
                o = n.maxSeats,
                i = n.startPointName,
                s = n.finishPointName
              return Object(ge.a)({}, e, {
                passengers: a,
                freeSeats: r,
                maxSeats: o,
                startPointName: i,
                finishPointName: s,
              })
            case da:
              var c = t.error
              return Object(ge.a)({}, e, { error: c })
            default:
              return e
          }
        },
        ba = { cars: [] }
      var ya = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ba,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case Qe:
              return Object(ge.a)({}, e, { loading: !0 })
            case Xe:
              var a = t.payload
              return Object(ge.a)({}, e, { loading: !1, cars: a })
            case Ze:
              var n = t.error
              return Object(ge.a)({}, e, { loading: !1, error: n })
            case $e:
              return Object(ge.a)({}, e, { loading: !0 })
            case et:
              return Object(ge.a)({}, e, { loading: !1 })
            case tt:
              var r = t.error
              return Object(ge.a)({}, e, { loading: !1, error: r })
            case at:
              return Object(ge.a)({}, e, { loading: !0 })
            case nt:
              return Object(ge.a)({}, e, { loading: !1 })
            case rt:
              var o = t.error
              return Object(ge.a)({}, e, { loading: !1, error: o })
            case ot:
              return Object(ge.a)({}, e, { loading: !0 })
            case it:
              return Object(ge.a)({}, e, { loading: !1 })
            case st:
              var i = t.error
              return Object(ge.a)({}, e, { loading: !1, error: i })
            default:
              return e
          }
        },
        Oa = '[HOME] GET_NOTIFICATIONS',
        ja = 'GET_NOTIFICATIONS_SUCCESS',
        ka = 'GET_NOTIFICATIONS_ERROR',
        Ca = 'DELETE_NOTIFICATION',
        Ra = 'DELETE_NOTIFICATION_SUCCESS',
        Sa = 'DELETE_NOTIFICATION_ERROR'
      var Na = { notifications: [] }
      var Pa = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Na,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case Oa:
              return Object(ge.a)({}, e)
            case ja:
              var a = t.payload
              return Object(ge.a)({}, e, { notifications: a })
            case ka:
              var n = t.error
              return Object(ge.a)({}, e, { error: n })
            case Ca:
              return Object(ge.a)({}, e, { loading: !0 })
            case Ra:
              return Object(ge.a)({}, e, { loading: !1 })
            case Sa:
              var r = t.error
              return Object(ge.a)({}, e, { loading: !1, error: r })
            default:
              return e
          }
        },
        xa = 'GET_STATISTICS',
        wa = 'GET_STATISTICS_SUCCESS',
        Ta = 'GET_STATISTICS_ERROR'
      var Aa = { statistics: [] }
      var Ia = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Aa,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case xa:
              return Object(ge.a)({}, e)
            case wa:
              var a = t.payload
              return Object(ge.a)({}, e, { statistics: a })
            case Ta:
              var n = t.error
              return Object(ge.a)({}, e, { error: n })
            default:
              return e
          }
        },
        _a = 'GET_DRIVER_DATA',
        Da = 'GET_DRIVER_DATA_SUCCESS',
        Fa = 'GET_DRIVER_DATA_ERROR'
      var La = {
        driverName: '',
        phoneNumber: '',
        carInformation: '',
        maxSeats: '',
        freeSeats: '',
        startPointName: '',
        finishPointName: '',
        viaPoints: [],
        meetPoint: [],
        destinationPoint: [],
        startPoint: [],
        finishPoint: [],
      }
      var Ga = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : La,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _a:
              return Object(ge.a)({}, e)
            case Da:
              var a = t.payload,
                n = a.driverName,
                r = a.phoneNumber,
                o = a.carInformation,
                i = a.freeSeats,
                s = a.maxSeats,
                c = a.startPointName,
                u = a.finishPointName,
                l = a.viaPoints,
                p = a.meetPoint,
                m = a.destinationPoint,
                d = a.startPoint,
                f = a.finishPoint
              return Object(ge.a)({}, e, {
                driverName: n,
                phoneNumber: r,
                carInformation: o,
                maxSeats: s,
                freeSeats: i,
                startPointName: c,
                finishPointName: u,
                viaPoints: l,
                meetPoint: p,
                destinationPoint: m,
                startPoint: d,
                finishPoint: f,
              })
            case Fa:
              var h = t.error
              return Object(ge.a)({}, e, { error: h })
            default:
              return e
          }
        },
        Ba = function(e) {
          return Object(Ht.c)({
            activeRides: ca,
            currentRide: ca,
            notifications: Pa,
            rides: Jt,
            favourites: Jt,
            activeRoutes: Jt,
            activeBookings: Jt,
            routesHistory: Jt,
            bookingHistory: Jt,
            userInfo: Kt,
            home: la,
            passenger: ga,
            driver: Ga,
            cars: ya,
            statistics: Ia,
            router: Object(zt.b)(e),
          })
        },
        Ua = a(137),
        Ha = Object(qt.a)()
      var Ma,
        qa = Object(Ht.e)(
          Ba(Ha),
          Ma,
          Object(Ht.d)(Object(Ht.a)(Mt.a, Object(Ua.a)(Ha)))
        ),
        Va = (function(e) {
          function t() {
            var e
            return (
              Object(s.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(l.a)(t).call(this)
              )).onCarChange = function(t) {
                e.setState({ carId: t })
              }),
              (e.onSeatsChange = function(t) {
                var a = t.target.value
                e.setState({ seats: a })
              }),
              (e.onTimeChange = function(t) {
                e.setState({ time: t })
              }),
              (e.handleClick = function(t) {
                t.preventDefault()
                var a = e.mapComponent.current.getRouteInfo(),
                  n = e.state
                e.props.createRoute(a, n)
              }),
              (e.handleChange = function(t) {
                e.setState({ from: t[0], to: t[1], changed: !e.state.changed })
              }),
              (e.state = {
                from: '',
                to: '',
                carId: '',
                seats: '',
                time: '',
                changed: !1,
              }),
              e
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestRides(),
                    (this.mapComponent = r.a.createRef())
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.rides
                  return r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        X.a,
                        { sm: 4 },
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            V.a,
                            null,
                            r.a.createElement(Ft, {
                              from: this.state.from,
                              to: this.state.to,
                              key: this.state.changed,
                              onSeats: this.onSeatsChange,
                              onTime: this.onTimeChange,
                              onCar: this.onCarChange,
                            }),
                            r.a.createElement(Tt, { rides: t, favourites: !0 })
                          )
                        ),
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            F.a,
                            {
                              className: 'right',
                              variant: 'dark',
                              type: 'submit',
                              onClick: function(t) {
                                e.handleClick(t)
                              },
                            },
                            'Create route'
                          )
                        )
                      ),
                      r.a.createElement(
                        X.a,
                        { sm: 6, style: { height: '450px' } },
                        r.a.createElement(Ut, {
                          needRouteEditor: !0,
                          ref: this.mapComponent,
                          handleChange: this.handleChange,
                        })
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ka = Object(E.c)(Fe, Le)(Va),
        za = a(89),
        Ya = a.n(za),
        Ja = a(59),
        Wa = a.n(Ja),
        Qa = a(38),
        Xa = a.n(Qa),
        Za = (a(259), a(36)),
        $a = a.n(Za),
        en = function(e) {
          return {
            passengers: e.passenger.passengers,
            freeSeats: e.passenger.freeSeats,
            maxSeats: e.passenger.maxSeats,
            startPointName: e.passenger.startPointName,
            finishPointName: e.passenger.finishPointName,
          }
        },
        tn = function(e) {
          return {
            requestPassengers: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        var n, r
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: pa }),
                                    (t.next = 4),
                                    x({
                                      url: '/api/activeRoute/'.concat(e),
                                      method: 'get',
                                    })
                                  )
                                case 4:
                                  ;(n = t.sent),
                                    (r = n.data),
                                    a({ type: ma, payload: r }),
                                    (t.next = 12)
                                  break
                                case 9:
                                  ;(t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    a(((o = t.t0), { type: da, error: o }))
                                case 12:
                                case 'end':
                                  return t.stop()
                              }
                            var o
                          },
                          t,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
            ratePassenger: function(t, a) {
              return e(
                (function(e, t) {
                  return (function() {
                    var a = Object(y.a)(
                      b.a.mark(function a(n) {
                        return b.a.wrap(
                          function(a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    n({ type: fa }),
                                    (a.next = 4),
                                    x({
                                      url: '/api/activeRoute/setRating',
                                      method: 'post',
                                      data: { id: e, rate: t },
                                    })
                                  )
                                case 4:
                                  n({ type: ha }), (a.next = 10)
                                  break
                                case 7:
                                  ;(a.prev = 7),
                                    (a.t0 = a.catch(0)),
                                    n(((r = a.t0), { type: va, error: r }))
                                case 10:
                                case 'end':
                                  return a.stop()
                              }
                            var r
                          },
                          a,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(e) {
                      return a.apply(this, arguments)
                    }
                  })()
                })(t, a)
              )
            },
          }
        },
        an = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).changeRating = function(e) {
                0 === a.state.rating &&
                  (a.setState({ rating: e }),
                  a.props.ratePassenger(a.props.id, e))
              }),
              (a.state = { rating: e.rating || 0 }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    a = e.phoneNumber,
                    n = e.enabled,
                    o = e.userRating
                  return r.a.createElement(
                    V.a.Item,
                    null,
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        X.a,
                        null,
                        t,
                        r.a.createElement('br', null),
                        a
                      ),
                      n
                        ? r.a.createElement(
                            X.a,
                            null,
                            r.a.createElement(Ke.a, {
                              rating: o,
                              starRatedColor: '#179EB7',
                              numberOfStars: 5,
                              name: 'userRating',
                              starDimension: '17px',
                              starSpacing: '2px',
                            })
                          )
                        : r.a.createElement(
                            X.a,
                            null,
                            r.a.createElement(Ke.a, {
                              rating: this.state.rating,
                              starRatedColor: '#179EB7',
                              starHoverColor:
                                0 === this.state.rating
                                  ? 'rgb(230, 67, 47)'
                                  : 'null',
                              changeRating: this.changeRating,
                              numberOfStars: 5,
                              name: 'rating',
                              starDimension: '17px',
                              starSpacing: '2px',
                            })
                          )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        nn = Object(E.c)(en, tn)(an),
        rn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.passengers,
                    a = void 0 === t ? [] : t,
                    n = e.enabled,
                    o = a.map(function(e) {
                      return r.a.createElement(nn, {
                        key: e.bookingId,
                        name: e.name,
                        phoneNumber: e.phoneNumber,
                        id: e.bookingId,
                        rating: e.rating,
                        enabled: n,
                        userRating: e.userRating,
                      })
                    })
                  return r.a.createElement($a.a, null, o)
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        on = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.match.params.routeid
                  this.props.requestPassengers(e)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.passengers,
                    a = t.bookings,
                    n = void 0 === a ? [] : a,
                    o = t.enabled,
                    i = e.freeSeats,
                    s = e.maxSeats,
                    c = e.startPointName,
                    u = e.finishPointName
                  return r.a.createElement(
                    'div',
                    { className: 'one-route-info' },
                    r.a.createElement(
                      'div',
                      { className: 'block' },
                      r.a.createElement(
                        Ya.a,
                        null,
                        r.a.createElement(
                          Wa.a,
                          null,
                          r.a.createElement(
                            Xa.a,
                            { sm: '7' },
                            r.a.createElement(Ut, null)
                          ),
                          r.a.createElement(
                            Xa.a,
                            { sm: '5' },
                            r.a.createElement(
                              'h5',
                              { className: 'title-list' },
                              'List of passengers:'
                            ),
                            r.a.createElement(
                              'div',
                              { className: 'scrollable list-passengers-style' },
                              r.a.createElement(rn, {
                                passengers: n,
                                enabled: o,
                              })
                            ),
                            r.a.createElement(
                              $a.a,
                              null,
                              r.a.createElement(
                                'h5',
                                { className: 'title-list' },
                                'From ',
                                r.a.createElement('span', {
                                  className: 'oi oi-arrow-right',
                                }),
                                ' To:',
                                ' '
                              ),
                              r.a.createElement(
                                $a.a.Item,
                                { className: 'list-item-style' },
                                c,
                                ' ',
                                r.a.createElement('span', {
                                  className: 'oi oi-arrow-right',
                                }),
                                ' ',
                                u
                              ),
                              r.a.createElement(
                                'h5',
                                { className: 'title-list' },
                                'Car information: '
                              ),
                              r.a.createElement(
                                $a.a.Item,
                                { className: 'list-item-style' },
                                r.a.createElement('b', null, 'Seats: '),
                                i,
                                '/',
                                s
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          Wa.a,
                          { style: { marginLeft: '1%' } },
                          r.a.createElement(
                            Xa.a,
                            {
                              xs: 'auto',
                              sm: 'auto',
                              style: { marginTop: '4%' },
                            },
                            r.a.createElement('span', {
                              className: 'oi oi-pencil',
                              style: { fontSize: '25px' },
                            })
                          ),
                          r.a.createElement(
                            Xa.a,
                            {
                              xs: 'auto',
                              sm: 'auto',
                              style: { marginTop: '4%' },
                            },
                            r.a.createElement('span', {
                              className: 'oi oi-envelope-closed',
                              style: { fontSize: '25px' },
                            })
                          ),
                          r.a.createElement(
                            Xa.a,
                            {
                              xs: 'auto',
                              sm: 'auto',
                              style: { marginTop: '4%' },
                            },
                            r.a.createElement('span', {
                              className: 'oi oi-trash',
                              style: { fontSize: '25px' },
                            })
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        sn = Object(E.c)(en, tn)(on),
        cn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        'h3',
                        { className: 'styleForHead' },
                        'New ride:'
                      )
                    ),
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        D.a,
                        null,
                        r.a.createElement(
                          D.a.Group,
                          { as: Q.a },
                          r.a.createElement(
                            D.a.Label,
                            { column: !0, sm: '2' },
                            'From:'
                          ),
                          r.a.createElement(
                            X.a,
                            null,
                            r.a.createElement(D.a.Control, {
                              type: 'text',
                              value: this.props.depPoint,
                              readOnly: !0,
                            })
                          )
                        ),
                        r.a.createElement(
                          D.a.Group,
                          { as: Q.a },
                          r.a.createElement(
                            D.a.Label,
                            { column: !0, sm: '2' },
                            'To:'
                          ),
                          r.a.createElement(
                            X.a,
                            null,
                            r.a.createElement(D.a.Control, {
                              type: 'text',
                              value: this.props.destPoint,
                              readOnly: !0,
                            })
                          )
                        ),
                        r.a.createElement(
                          D.a.Group,
                          { as: Q.a },
                          r.a.createElement(
                            D.a.Label,
                            { column: !0, sm: '2' },
                            'Time:'
                          ),
                          r.a.createElement(
                            X.a,
                            null,
                            r.a.createElement(_t, {
                              onChange: this.props.onTime,
                            })
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        un = function(e) {
          return (function() {
            var t = Object(y.a)(
              b.a.mark(function t(a) {
                return b.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a(ra()),
                            (t.next = 4),
                            x({
                              url: '/api/createBooking',
                              method: 'post',
                              data: e,
                            })
                          )
                        case 4:
                          a(oa()), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a(ia(t.t0))
                        case 10:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function(e) {
              return t.apply(this, arguments)
            }
          })()
        },
        ln = function(e) {
          return (function() {
            var t = Object(y.a)(
              b.a.mark(function t(a) {
                return b.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a(ra()),
                            (t.next = 4),
                            x({
                              url: '/api/bookingValid',
                              method: 'post',
                              data: e,
                            })
                          )
                        case 4:
                          a(oa()), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a(ia(t.t0))
                        case 10:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function(e) {
              return t.apply(this, arguments)
            }
          })()
        },
        pn = function(e) {
          return (function() {
            var t = Object(y.a)(
              b.a.mark(function t(a) {
                var n, r, o
                return b.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: Wt }),
                            (n = {
                              meetPoint: null,
                              destinationPoint: null,
                              datetime: null,
                            }),
                            (t.next = 5),
                            x({
                              url: '/api/searchRoutes',
                              method: 'post',
                              data: 'undefined' === typeof e ? n : e,
                            })
                          )
                        case 5:
                          ;(r = t.sent),
                            (o = r.data),
                            a({ type: Qt, payload: o }),
                            (t.next = 13)
                          break
                        case 10:
                          ;(t.prev = 10),
                            (t.t0 = t.catch(0)),
                            a(((i = t.t0), { type: Xt, error: i }))
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                    var i
                  },
                  t,
                  null,
                  [[0, 10]]
                )
              })
            )
            return function(e) {
              return t.apply(this, arguments)
            }
          })()
        },
        mn = function(e) {
          return (function() {
            var t = Object(y.a)(
              b.a.mark(function t(a) {
                var n, r
                return b.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: Zt }),
                            (t.next = 4),
                            x({ url: '/api/route/'.concat(e), method: 'get' })
                          )
                        case 4:
                          ;(n = t.sent),
                            (r = n.data),
                            a({ type: $t, payload: r }),
                            (t.next = 12)
                          break
                        case 9:
                          ;(t.prev = 9),
                            (t.t0 = t.catch(0)),
                            a(((o = t.t0), { type: ea, error: o }))
                        case 12:
                        case 'end':
                          return t.stop()
                      }
                    var o
                  },
                  t,
                  null,
                  [[0, 9]]
                )
              })
            )
            return function(e) {
              return t.apply(this, arguments)
            }
          })()
        },
        dn = (function(e) {
          function t() {
            var e
            return (
              Object(s.a)(this, t),
              ((e = Object(u.a)(
                this,
                Object(l.a)(t).call(this)
              )).changeDepPoint = function(t) {
                e.setState({ depPoint: t })
              }),
              (e.changeDestPoint = function(t) {
                e.setState({ destPoint: t })
              }),
              (e.onTimeChange = function(t) {
                e.setState({ time: t })
              }),
              (e.choose = (function() {
                var t = Object(y.a)(
                  b.a.mark(function t(a) {
                    var n
                    return b.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('' === a) {
                              t.next = 5
                              break
                            }
                            return (t.next = 3), e.props.getRide(a)
                          case 3:
                            ;(n = e.props.currentRide),
                              e.setState({ chosenRide: n })
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function(e) {
                  return t.apply(this, arguments)
                }
              })()),
              (e.handleConfirmClick = function(t) {
                t.preventDefault()
                var a = {
                  meetPoint: e.state.arrayFrom,
                  destinationPoint: e.state.arrayTo,
                  activeRouteId: e.state.activeRouteId,
                }
                e.props.createBooking(a)
              }),
              (e.handleSearchClick = function(t) {
                t.preventDefault()
                var a = e.mapComponent.current.getPoints()
                e.setState({ arrayFrom: a[0], arrayTo: a[1] })
                var n = {
                  meetPoint: a[0],
                  destinationPoint: a[1],
                  datetime: e.state.time.toJSON(),
                }
                e.props.getRides(n)
              }),
              (e.setRouteId = function(t) {
                e.setState({ activeRouteId: t })
              }),
              (e.state = {
                chosenRide: {},
                depPoint: '',
                destPoint: '',
                time: '',
                activeRouteId: '',
                arrayFrom: [],
                arrayTo: [],
              }),
              e
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.getRides(), (this.mapComponent = r.a.createRef())
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.activeRides,
                    t = void 0 === e ? [] : e
                  return r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      Q.a,
                      null,
                      r.a.createElement(
                        X.a,
                        { sm: 5 },
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            V.a,
                            null,
                            r.a.createElement(cn, {
                              depPoint: this.state.depPoint,
                              destPoint: this.state.destPoint,
                              onTime: this.onTimeChange,
                            })
                          )
                        ),
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            F.a,
                            {
                              variant: 'dark',
                              type: 'submit',
                              onClick: this.handleSearchClick,
                            },
                            'Search'
                          )
                        ),
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(Tt, {
                            rides: t,
                            getRide: this.choose.bind(this),
                            setId: this.setRouteId,
                          })
                        ),
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            F.a,
                            {
                              variant: 'dark',
                              type: 'submit',
                              onClick: this.handleConfirmClick,
                              style: { marginTop: '10px' },
                            },
                            'Confirm'
                          )
                        )
                      ),
                      r.a.createElement(
                        X.a,
                        { sm: 7 },
                        r.a.createElement(Ut, {
                          ref: this.mapComponent,
                          needPlacemarks: !0,
                          showing: this.state.chosenRide,
                          changeDepPoint: this.changeDepPoint,
                          changeDestPoint: this.changeDestPoint,
                        })
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        fn = Object(E.c)(
          function(e) {
            return {
              activeRides: e.activeRides.activeRides,
              currentRide: e.currentRide.currentRide,
            }
          },
          function(e) {
            return {
              getRides: function(t) {
                return e(pn(t))
              },
              getRide: function(t) {
                return e(mn(t))
              },
              verifyPoints: function(t) {
                return e(ln(t))
              },
              createBooking: function(t) {
                return e(un(t))
              },
            }
          }
        )(dn),
        hn =
          (a(103),
          function(e) {
            return e.notifications
          }),
        vn = function(e) {
          return {
            requestNotifications: function() {
              return e(
                (function() {
                  var e = Object(y.a)(
                    b.a.mark(function e(t) {
                      var a, n
                      return b.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: Oa }),
                                  (e.next = 4),
                                  x({
                                    url: '/api/notifications',
                                    method: 'get',
                                  })
                                )
                              case 4:
                                ;(a = e.sent),
                                  (n = a.data),
                                  t({ type: ja, payload: n }),
                                  (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t(((r = e.t0), { type: ka, error: r }))
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                          var r
                        },
                        e,
                        null,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              )
            },
            deleteNotification: function(t) {
              return e(
                (function(e) {
                  return (function() {
                    var t = Object(y.a)(
                      b.a.mark(function t(a) {
                        var n
                        return b.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: Ca }),
                                    (n = JSON.stringify(e)),
                                    (t.next = 5),
                                    x({
                                      url: '/api/notification',
                                      method: 'delete',
                                      data: n,
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    })
                                  )
                                case 5:
                                  a({ type: Ra }), (t.next = 11)
                                  break
                                case 8:
                                  ;(t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    a(((r = t.t0), { type: Sa, error: r }))
                                case 11:
                                case 'end':
                                  return t.stop()
                              }
                            var r
                          },
                          t,
                          null,
                          [[0, 8]]
                        )
                      })
                    )
                    return function(e) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(t)
              )
            },
          }
        },
        En = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).delete = function() {
                a.props.deleteNotification(a.props.id)
              }),
              (a.state = {
                text: e.text,
                routeId: 'routes/route-info/' + e.routeId,
                rideId: 'routes/ride-info/' + e.routeId,
                driver: e.driver,
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'isDriver',
                value: function(e) {
                  var t = this
                  if (e)
                    return r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return qa.dispatch(Object(N.d)(t.state.routeId))
                        },
                      },
                      r.a.createElement(
                        V.a.Item,
                        {
                          key: this.props.routeId,
                          className: 'itemOfNotificationList',
                        },
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            X.a,
                            { xs: '10', md: '11' },
                            this.state.text,
                            r.a.createElement(
                              Z.a,
                              { variant: 'info' },
                              'Driver'
                            )
                          ),
                          r.a.createElement(
                            X.a,
                            { xs: '2', md: '1' },
                            r.a.createElement('span', {
                              className: 'oi oi-x',
                              onClick: function(e) {
                                e.stopPropagation(),
                                  t.delete(),
                                  setTimeout(t.props.handleDelete, 1e3)
                              },
                            })
                          )
                        )
                      )
                    )
                },
              },
              {
                key: 'isPassenger',
                value: function(e) {
                  var t = this
                  if (!e)
                    return r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return qa.dispatch(Object(N.d)(t.state.rideId))
                        },
                      },
                      r.a.createElement(
                        V.a.Item,
                        {
                          key: this.props.rideId,
                          className: 'itemOfNotificationList',
                        },
                        r.a.createElement(
                          Q.a,
                          null,
                          r.a.createElement(
                            X.a,
                            { xs: '10', md: '11' },
                            this.state.text,
                            r.a.createElement(
                              Z.a,
                              { variant: 'info' },
                              'Passenger'
                            )
                          ),
                          r.a.createElement(
                            X.a,
                            { xs: '2', md: '1' },
                            r.a.createElement('span', {
                              className: 'oi oi-x',
                              onClick: function(e) {
                                e.stopPropagation(),
                                  t.delete(),
                                  setTimeout(t.props.handleDelete, 1e3)
                              },
                            })
                          )
                        )
                      )
                    )
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.driver
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.isDriver(e),
                    this.isPassenger(e)
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        gn = Object(E.c)(hn, vn)(En),
        bn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.notifications,
                    a = e.handleDelete,
                    n = t.map(function(e) {
                      return r.a.createElement(gn, {
                        text: e.information,
                        id: e.id,
                        routeId: e.routeOrBookingId,
                        key: e.id,
                        handleDelete: a,
                        driver: e.driver,
                      })
                    })
                  return r.a.createElement(
                    V.a,
                    { calssname: 'listForNotifications' },
                    n
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        yn = (function(e) {
          function t() {
            var e, a
            Object(s.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(l.a)(t)).call.apply(e, [this].concat(r))
              )).handleDelete = function() {
                a.props.requestNotifications()
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.requestNotifications()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.notifications
                  return 0 === e.length
                    ? r.a.createElement(
                        'div',
                        { className: 'noStuff' },
                        'No notifications yet '
                      )
                    : r.a.createElement(
                        'div',
                        { className: 'notificationList' },
                        r.a.createElement(bn, {
                          notifications: e,
                          handleDelete: this.handleDelete.bind(this),
                        })
                      )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        On = Object(E.c)(hn, vn)(yn),
        jn = a(91),
        kn = a.n(jn),
        Cn = a(84),
        Rn = (function(e) {
          function t(e) {
            var a
            return (
              Object(s.a)(this, t),
              ((a = Object(u.a)(this, Object(l.a)(t).call(this, e))).state = {
                name: e.name,
                ratingDriver: e.ratingDriver,
                ratingPassenger: e.ratingPassenger,
                distance: e.distance,
                amountOfPassengers: e.amountOfPassengers,
                amountOfBookings: e.amountOfBookings,
                amountOfRoutes: e.amountOfRoutes,
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'tbody',
                    null,
                    r.a.createElement(
                      'tr',
                      null,
                      r.a.createElement('td', null, this.state.name),
                      r.a.createElement(
                        'td',
                        null,
                        this.state.ratingDriver.toFixed(1)
                      ),
                      r.a.createElement(
                        'td',
                        null,
                        this.state.ratingPassenger.toFixed(1)
                      ),
                      r.a.createElement(
                        'td',
                        null,
                        this.state.distance.toFixed(2)
                      ),
                      r.a.createElement(
                        'td',
                        null,
                        this.state.amountOfPassengers
                      ),
                      r.a.createElement(
                        'td',
                        null,
                        this.state.amountOfBookings
                      ),
                      r.a.createElement('td', null, this.state.amountOfRoutes)
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Sn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.statistics.map(function(e) {
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(Rn, {
                        name: e.name,
                        ratingDriver: e.ratingDriver,
                        ratingPassenger: e.ratingPassenger,
                        distance: e.distance,
                        amountOfPassengers: e.amountOfPassengers,
                        amountOfBookings: e.amountOfBookings,
                        amountOfRoutes: e.amountOfRoutes,
                      })
                    )
                  })
                  return r.a.createElement(r.a.Fragment, null, e)
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Nn = a(150),
        Pn = a.n(Nn),
        xn =
          (a(264),
          (function(e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
              )
            }
            return (
              Object(p.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.props.requestStatistics()
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.statistics
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        kn.a,
                        { size: 'sm', className: 'mb-3 search' },
                        r.a.createElement(Cn.a, {
                          'aria-label': 'Small',
                          placeholder: 'Search the person',
                          'aria-describedby': 'inputGroup-sizing-sm',
                        }),
                        r.a.createElement(
                          kn.a.Prepend,
                          null,
                          r.a.createElement(
                            kn.a.Text,
                            { id: 'inputGroup-sizing-sm' },
                            r.a.createElement('span', {
                              className: 'oi oi-magnifying-glass',
                              onClick: function(e) {
                                e.preventDefault()
                              },
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'table-responsive-sm' },
                        r.a.createElement(
                          Pn.a,
                          {
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            size: 'sm',
                            style: { margin: 'auto' },
                          },
                          r.a.createElement(
                            'thead',
                            null,
                            r.a.createElement(
                              'tr',
                              null,
                              r.a.createElement(
                                'th',
                                { className: 'titles name' },
                                r.a.createElement('span', null, 'name '),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles amount' },
                                r.a.createElement(
                                  'span',
                                  null,
                                  'driver rating '
                                ),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles amount' },
                                r.a.createElement(
                                  'span',
                                  null,
                                  ' passenger rating '
                                ),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles distance' },
                                r.a.createElement('span', null, 'distance '),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles amount' },
                                r.a.createElement(
                                  'span',
                                  null,
                                  'amount of passengers '
                                ),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles amount' },
                                r.a.createElement(
                                  'span',
                                  null,
                                  'amount of bookings '
                                ),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              ),
                              r.a.createElement(
                                'th',
                                { className: 'titles amount' },
                                r.a.createElement(
                                  'span',
                                  null,
                                  'amount of routes '
                                ),
                                r.a.createElement(
                                  'span',
                                  { className: 'wrap' },
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-bottom arrows',
                                  }),
                                  r.a.createElement('span', {
                                    className: 'oi oi-caret-top arrows',
                                  })
                                )
                              )
                            )
                          ),
                          r.a.createElement(Sn, { statistics: e })
                        )
                      )
                    )
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        wn = Object(E.c)(
          function(e) {
            return e.statistics
          },
          function(e) {
            return {
              requestStatistics: function() {
                return e(
                  (function() {
                    var e = Object(y.a)(
                      b.a.mark(function e(t) {
                        var a, n
                        return b.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: xa }),
                                    (e.next = 4),
                                    x({ url: '/api/statistic', method: 'get' })
                                  )
                                case 4:
                                  ;(a = e.sent),
                                    (n = a.data),
                                    t({ type: wa, payload: n }),
                                    (e.next = 12)
                                  break
                                case 9:
                                  ;(e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t(((r = e.t0), { type: Ta, error: r }))
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                            var r
                          },
                          e,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })()
                )
              },
            }
          }
        )(xn),
        Tn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.match.params.rideid
                  this.props.requestDriver(e)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.driverName,
                    a = e.phoneNumber,
                    n = e.freeSeats,
                    o = e.maxSeats,
                    i = e.startPointName,
                    s = e.finishPointName,
                    c = e.carInformation,
                    u = {
                      viaPoints: e.viaPoints,
                      meetPoint: e.meetPoint,
                      destinationPoint: e.destinationPoint,
                      startPoint: e.startPoint,
                      finishPoint: e.finishPoint,
                    }
                  return r.a.createElement(
                    'div',
                    { className: 'one-route-info' },
                    r.a.createElement(
                      'div',
                      { className: 'block' },
                      r.a.createElement(
                        Ya.a,
                        null,
                        r.a.createElement(
                          Wa.a,
                          null,
                          r.a.createElement(
                            Xa.a,
                            { sm: '7' },
                            r.a.createElement(Ut, { passengerInfo: u })
                          ),
                          r.a.createElement(
                            Xa.a,
                            { sm: '5' },
                            r.a.createElement(
                              'div',
                              { style: { height: 'auto', maxHeight: '262px' } },
                              r.a.createElement(
                                $a.a,
                                null,
                                r.a.createElement(
                                  'h5',
                                  { className: 'title-list' },
                                  'Driver: '
                                ),
                                r.a.createElement(
                                  $a.a.Item,
                                  { className: 'list-item-style' },
                                  r.a.createElement('b', null, 'Name:'),
                                  ' ',
                                  t,
                                  ',',
                                  r.a.createElement('br', null),
                                  r.a.createElement('b', null, 'Phone number:'),
                                  ' ',
                                  a
                                ),
                                r.a.createElement(
                                  'h5',
                                  { className: 'title-list' },
                                  'Car information: '
                                ),
                                r.a.createElement(
                                  $a.a.Item,
                                  { className: 'list-item-style' },
                                  r.a.createElement('b', null, 'Info: '),
                                  ' ',
                                  c,
                                  ',',
                                  r.a.createElement('br', null),
                                  r.a.createElement('b', null, 'Seats: '),
                                  n,
                                  '/',
                                  o
                                ),
                                r.a.createElement(
                                  'h5',
                                  { className: 'title-list' },
                                  'From ',
                                  r.a.createElement('span', {
                                    className: 'oi oi-arrow-right',
                                  }),
                                  ' To:',
                                  ' '
                                ),
                                r.a.createElement(
                                  $a.a.Item,
                                  { className: 'list-item-style' },
                                  i,
                                  ' ',
                                  r.a.createElement('span', {
                                    className: 'oi oi-arrow-right',
                                  }),
                                  ' ',
                                  s
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          Wa.a,
                          { style: { marginLeft: '1%' } },
                          r.a.createElement(
                            Xa.a,
                            {
                              xs: 'auto',
                              sm: 'auto',
                              style: { marginTop: '4%' },
                            },
                            r.a.createElement('span', {
                              className: 'oi oi-envelope-closed',
                              style: { fontSize: '25px' },
                            })
                          ),
                          r.a.createElement(
                            Xa.a,
                            {
                              xs: 'auto',
                              sm: 'auto',
                              style: { marginTop: '4%' },
                            },
                            r.a.createElement('span', {
                              className: 'oi oi-trash',
                              style: { fontSize: '25px' },
                            })
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        An = Object(E.c)(
          function(e) {
            return {
              driverName: e.driver.driverName,
              phoneNumber: e.driver.phoneNumber,
              carInformation: e.driver.carInformation,
              freeSeats: e.driver.freeSeats,
              maxSeats: e.driver.maxSeats,
              startPointName: e.driver.startPointName,
              finishPointName: e.driver.finishPointName,
              viaPoints: e.driver.viaPoints,
              meetPoint: e.driver.meetPoint,
              finishPoint: e.driver.finishPoint,
              startPoint: e.driver.startPoint,
            }
          },
          function(e) {
            return {
              requestDriver: function(t) {
                return e(
                  (function(e) {
                    return (function() {
                      var t = Object(y.a)(
                        b.a.mark(function t(a) {
                          var n, r
                          return b.a.wrap(
                            function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: _a }),
                                      (t.next = 4),
                                      x({
                                        url: '/api/booking/'.concat(e),
                                        method: 'get',
                                      })
                                    )
                                  case 4:
                                    ;(n = t.sent),
                                      (r = n.data),
                                      a({ type: Da, payload: r }),
                                      (t.next = 12)
                                    break
                                  case 9:
                                    ;(t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      a(((o = t.t0), { type: Fa, error: o }))
                                  case 12:
                                  case 'end':
                                    return t.stop()
                                }
                              var o
                            },
                            t,
                            null,
                            [[0, 9]]
                          )
                        })
                      )
                      return function(e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  })(t)
                )
              },
            }
          }
        )(Tn),
        In = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'guestUser',
                value: function() {
                  if (!this.props.userInfo.checked)
                    return r.a.createElement(H.a, {
                      exact: !0,
                      path: '/login',
                      component: U,
                    })
                },
              },
              {
                key: 'userRoutes',
                value: function() {
                  var e = this.props.userInfo
                  return Boolean(e.username)
                    ? [
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/home',
                          component: Pt,
                          key: 1,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/home/new-ride',
                          component: fn,
                          key: 2,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/home/new-route',
                          component: Ka,
                          key: 3,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/routes',
                          component: He,
                          key: 4,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/notifications',
                          component: On,
                          key: 5,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/routes/route-info/:routeid',
                          component: sn,
                          key: 6,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/routes/ride-info/:rideid',
                          component: An,
                          key: 10,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/profile',
                          component: kt,
                          key: 7,
                        }),
                        r.a.createElement(H.a, {
                          exact: !0,
                          path: '/new-ride',
                          component: fn,
                          key: 8,
                        }),
                        r.a.createElement(H.a, {
                          render: function() {
                            return r.a.createElement(
                              'h1',
                              null,
                              'Page not found'
                            )
                          },
                          key: 9,
                        }),
                      ]
                    : r.a.createElement(H.a, {
                        exact: !0,
                        path: '/login',
                        component: U,
                      })
                },
              },
              {
                key: 'adminRoutes',
                value: function() {
                  return 'ROLE_ADMINISTRATOR' === this.props.userInfo.role
                    ? r.a.createElement(H.a, {
                        exact: !0,
                        path: '/statistics',
                        component: wn,
                      })
                    : this.userRoutes()
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    H.c,
                    null,
                    this.guestUser(),
                    this.adminRoutes(),
                    this.userRoutes()
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        _n = Object(E.c)(function(e) {
          return { userInfo: e.userInfo }
        })(In),
        Dn = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(u.a)(this, Object(l.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  qa.dispatch(
                    (function() {
                      var e = Object(y.a)(
                        b.a.mark(function e(t) {
                          var a, n, r, o, i, s, c, u, l, p
                          return b.a.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t(R()),
                                      (e.next = 4),
                                      x({ url: '/api/header', method: 'get' })
                                    )
                                  case 4:
                                    return (
                                      (a = e.sent),
                                      (n = a.data),
                                      (e.next = 8),
                                      x({ url: '/api/profile', method: 'get' })
                                    )
                                  case 8:
                                    return (
                                      (r = e.sent),
                                      (o = r.data.photoUrl),
                                      (e.next = 12),
                                      x({ url: 'api/profile', method: 'get' })
                                    )
                                  case 12:
                                    return (
                                      (i = e.sent),
                                      (s = i.data.ratingDriver),
                                      (e.next = 16),
                                      x({ url: 'api/profile', method: 'get' })
                                    )
                                  case 16:
                                    return (
                                      (c = e.sent),
                                      (u = c.data.ratingPassenger),
                                      (e.next = 20),
                                      x({ url: 'api/profile', method: 'get' })
                                    )
                                  case 20:
                                    ;(l = e.sent),
                                      (p = l.data.phoneNumber),
                                      t(
                                        S({
                                          username: n.name,
                                          role: n.role,
                                          photoUrl: o,
                                          ratingDriver: s,
                                          ratingPassenger: u,
                                          phoneNumber: p,
                                        })
                                      ),
                                      (e.next = 28)
                                    break
                                  case 25:
                                    ;(e.prev = 25),
                                      (e.t0 = e.catch(0)),
                                      t(Object(N.d)('/login'))
                                  case 28:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 25]]
                          )
                        })
                      )
                      return function(t) {
                        return e.apply(this, arguments)
                      }
                    })()
                  )
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.props.loading
                    ? r.a.createElement('div', null, 'Loading...')
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(I, null),
                        r.a.createElement(
                          m.a,
                          { className: 'top-marg' },
                          r.a.createElement(_n, null)
                        ),
                        r.a.createElement(d, null)
                      )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Fn = Object(E.c)(function(e) {
          return { isLoggedIn: !!e.userInfo.loading }
        })(Dn)
      i.a.render(
        r.a.createElement(
          E.a,
          { store: qa },
          r.a.createElement(zt.a, { history: Ha }, r.a.createElement(Fn, null))
        ),
        document.getElementById('root')
      )
    },
    69: function(e, t, a) {},
  },
  [[152, 1, 2]],
])
//# sourceMappingURL=main.ad8792d8.chunk.js.map
