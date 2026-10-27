
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ljf&rogerIPOOLGO';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
hysteria2://253591cd-2a46-4fd9-dfe7-76bd2f29925e@de.yienergysmarthome.com:24670?alpn=h2%2Chttp%2F1.1%2Ch3#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAhy%E9%94%80%E5%94%AE%E7%94%A8%EF%BC%88%E6%8A%97%E5%B9%B2%E6%89%B0%EF%BC%89
vless://75e67064-c2fd-4ba1-df37-1ca69d8d95d2@de.yienergysmarthome.com:28179?type=tcp&encryption=none&security=reality&sni=apple.com&pbk=lV6RKTGiDvMtfRbkWTD02h-B8FawWv3CPfRUrji5Sx0&pqv=PmY5BL1GW4M3Z16OGSyytrmq73bj5f0M_nXX29gVLIOg_RJfQ-GdPwRMYr11p0tBAS6OeYyaFJ5ev23bY96Q6DulE1Ts6jLcq2XFhqieyqGdUImO4l2QL1Qio-__3QS3d_X1Huwpd43nrYviqgMN7EvR-1WvJaAv1mYdGARc0okOH8GnE7OHHm5eg7ITHCkIPc3EOq-QnaVbn6mzVqvOJ5qIzytJsABf-r_G5hPPavp1d155lkrMdn3NfFDaUQwiq58rf4doEGoMCrxIeKorP3jGKWRGJHHLsAr7jZHpsVb5Dun4olEoW2PVnH2fSO4pdH05MZsVbTbRyYSi-wuPSmAldzj3J3AZEqHzGi02vjbbf0hX0Dt0D83H-niIqUXKB1bYm7wKUxPzqT4l26iZeCGw8RVHSjDv7eYR9m3uGaZb_5Zk4dfGBSulXkCI_Av8NIvLBUe9RIMIra-buQuOeATL58w2_2nuP4M4LN4Lls5tlv4a4Ozwr2mhF71SBo6N2Iy3S7Wl0GH0nW_oGiiMO7D824XFZC0Ig9yudI4e0L9dFS5mqq8W9jBgWM-FFbVoTzlJ8odPEuKvqyyDW12bjhRKOUO370OVBmwF_WzztgyX6wZicbJkV_gNdmOLrSVwRM4l7wESqEbPLiKI8o3FXZERLl_EIJL6_ODSmc6d8t63a-m2drndiWKCzX_NU60sljx-6ijqwTePlHYiU5eO5MMuwOsJ5-MT9dYMP4EFdTWRlrjAqBwQkHrmMRs1eHv4XZ9GlpQIcuBz2hpUbQoEGtWJ6ZT-6s6IF4QbsYuz2nO24EAfVCE5J5OKlUFg7ra_IcxHIZ0SaS2C_NxLp95MWzSLxIcMAUjBxCQncGiRvjF2b08mhnYZdIxpt9_MQMDJ0M5josSj129xTHuNr9YHQ_TbRxUOex3r4mo8AqhKjOwMZqmlf1FU4TFOyCPHA5mxFuUKzeup7bxV0ykrpb3QV0pr9cmFIbW_9dYs2z6xLj8OnDfiDtqpp3ciIwdDHe3DqMoaS3Z3bWpUbO5y_V9DYgFheOO_y4B3A4l5fExmkuW-VX-xM64TmVZsgSb59_eB7OLw_7CIwn7Fe2OJtLTBhtMRk7nX9NbYNJaiYNNEFIVr24q0qVwk6RwtuVDEbsA_coc03l6Pmvm9NG1QQGxKeiw4jkhYyJNbWWWE8T8SHtwZf-ZNv0sjcUJE0iXxxr_4OPDqjeNyolA0ycv5Uhqlx7zPO9VzKkApiIRjXcTcPWfjeJWAGWlohC6hTYz_a4zXxAENTfhsW5b3BXs1iq-ab9FBbVun2v3bWd97n7jEcq7K9wv_mUndEB5oO_2DIEh6HEmOkjcjL4LKlJ4Z9-dOkaHtGetGryyHH4vS9BXEW3hrNE2dbZRrBbzpa9GpIjODS6_3wmyfZtiOYCsGZQeunk1MXb496xR8sg7pF8G2uP7zCL662mjRWYu6irPs_VRGpQq2TSKsaykJxN2k53AyTtMXuhbQogje-nmDNxyTkFIYE96YMxRcy2ode7dJXjyfLLMRKuy-ucx00vevh9iYASNVnDgZbvm4h0Jq9vRtrMN62alQXNFGAjDvhkBiqpZrxmj2lkjoo9rf69xgnjpGCMiO_6e-n0dNv0elNnrjKqP0ubVCYwYUQuJ09wDsC3yP2ZmiqrbLWWL7hXzY2JaiBfVn21DoKndeyAhXC2F3MizVSblgCZYjwUZ864VfBOZCd7_E3tJlGWyUuEqjMD3zzEEZCT0JduaqeszgThgSducfnYHWmQRRdum9rs-C8H_dg58qSV5AWeNtZsjUHkvWMhEJXtZ74dJjM8aSyEZzWzOgTu9T3eG72G_KNLE1A9TlpL75oSgFv24ZXjvT3TaIMa-htxAoZTcSwLXLCxXVNyDCI2rbRUAYenjey9Mslh3GB25vrutwDQ6_NQri5tg3q9NYH5qWb6qqkRUGsnCwm3IHkrmxWLMigKzHCE7slU6spK02M05t-zqIDwixdf0dUvu-4M0jzV9Q1lL87sHs9B78TAJqOA92eq8sO6acVfCnxed8AY-li_gjmOeqW6pRldtIb7ZIHw75eTTqH9xaUcjVFFrkIa818OSA02UDJWGeeBgcU3920ors3DxzCGuUZQp-qHp5qCrVdho5Amev2ZSNSN-j3RG9dVWxnn87nGphIoeCEwIJHwObThv2rUQh8LVFoURqER3ImVZuk9lazk4vUcSQI9edhDNndXnK0ovUy6rIDc4sUyW4UPYrH3Ub7EYZK0wbohUtvPBx5h-k3VZ4hqtI4XW34zMw6Nv9V5nuf6TS1dNBvnVMmHma0PBsEgf_8WP25-qzVobBz94PZpbtgogDzrjNMhREQb1RfQF3uUXQQ7qPp-h7SvujdKH5Mh2kQUeD6BE4TiMXReKMz6-hMjUQscswSFW9VA6xFh9NClWVXfrS9F37nsobVgZr82qbe6vigcZ83arOdnDUzCBeWnE_czYDL3XPVnl5sKf43n844Fva71gPe9WKlW0q3TkvAz7nprKV08TL6Onq7XhHiqF8RC7yjwmBD6_ZQSsBwPZWNkdb1kdJjck3Y56GuZ73XIiN4B_2aZrPwxeNOB8&sid=ccec93b9&fp=chrome&flow=xtls-rprx-vision#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AARe%E9%94%80%E5%94%AE%E7%94%A8
vless://0ac04766-6310-44bf-c120-60eb3c8a2757@de.yienergysmarthome.com:29645?type=ws&encryption=none&security=tls&path=%2Frllczygzmryf&fp=&alpn=h2%2Chttp%2F1.1%2Ch3&flow=xtls-rprx-vision#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAVMS%E9%94%80%E5%94%AE%E7%94%A8
vless://8344f431-926e-4777-c049-c2aa07b16a8b@de.yienergysmarthome.com:23136?type=xhttp&encryption=none&security=reality&path=%2F&host=de.yienergysmarthome.com&mode=auto&sni=apple.com&pbk=X2HLFnAutiGxWc7fj4a_laI93Fm71IEx-2nKsF0ZYCE&pqv=QxR9ktI6j54XvgXHpsERXwg701Cqi0rVc3fdu7g9n3CyfEtwOvF17_-1xk_utN0Qm2D8lG_9x3oQnk555jWRBuLPj2sAXjXsN31v4VeESIDsMXFRuRo1KT3FdCgXluYbXqhJFCWth3eQwKeiOQOf39uztJVXt-aSlzwon74S4wMV8ctU4Cxic2RLdrlgjSbbizOzLKd06Yfdtqu0A0DE0rgb9q45qEfSI8dxRNyGKRkNgtuduJr4DfwMbHZ5l91IA_gCagFd4UCBmfXIJFnoDvRRz8vh0Klem4gPj2RYc_Uw3TnncM4y5JehM9pMq9kXPVvD2-b5vnWsukOJbDYdgO5B1n6DBsn71TtxG-gUbHP9_Us9uiT7An8anD3YfO6LCmUMDe3Lod4iMQeU--e-GQiEfCfs4eUc4r0kJs8M7rzq2XXYw2ZCa5iWfZX1Cn0aLq6UEyrbEV_g7V8okwe7isjfahliu8XSW6YBx3TLOHgXBZqulDN8SIuVMx5mIvWZXIqbG0BiJpdZ3CJOVpMBxVBGolFn_ADuyQgg18sue2sOxKugSrJaaqtU5ieFirzbCOolR8ePOH0-Iedrj7Q2LhQJjBWwbZ2bVqfPZiyqgbrfwmyyXYyaF5PVpDgNPqNaYgrsGQ4uLFvdpCgEjKviJGFxn8pW0inhRzZyuLD1Sm5DN6GWGLnPmU6WF_jp4DViN0_EfZChpU4u7Gd33SdAifgre448Hh7lr6jEr4wl9DMBZdkBsAeu8Uj9H8RgI8i1n4YrryUgIkULW7f3nB1fDMWVoTYkYOh6rj3waTQaErPKwlI73CmmcPfE3Bo0ksWeiRqwrA5HMPH8FcibVJ6aovOjOtKL99yVi-dHZP07HqTtyGIOmY0x74l4UBSo2LOZlbeClWFis288Gt2t8VIvtTMdQPjLx7cq4DCcKQlmMaWLu7klBgcEn8jy0ElVmnnvrFRss-asSrgQBqAx6cJVEVM4DwnTRyhWj2F8Pi73mdD7c9W6sOSAFbIwVei5LvdhmyA-8xIyfrPGH7nZzpLftRP5y5CgRH6SqM6K_FuxBijfF3pcilFcSY7TAr5etFRhKieW3uSVBcz77yge3gJjsX777iJGLMePHVpP_tcirHLCLPLrtgVqpDpTM82LTAG-pGtTRnb-jMu-CzNhZSnR_vQRnJQ0jyDOm0tsvuGl7UwXfIycxpEfFRdRkRyFQxdiq5FVbDyTLIWwxtAIBinDmElYHTSGLfQ2QLYFNgFppuhq8H5hdtwVwghIiTD_3TXSetmo0e3lLVniSQEwgYsxP562vkaId6-nn2rEfsCkMlAB2Z7Q7pf3Xb7XhuUD-ig-n0CsNbObA7Tm-jP7d6vXJ0Xbya-irePdFcaTtZ7v-tGeNJkeWsDmtZdCdRFXhL5rU7NcN_1-rRT12T5J7rws6ZYN9vFMZp_4l3NYzzcrsN-cf0mdoEq-BMGNFycPalQM1-7wdmzCLm-VoLauvgfr3_uQg62AUJhyeduPmaGmOfGsocqDPuIXMwpC7TJPA_z4nxcFRm3-psg-EHV08sIcV6hkVcHSbu8kDdiRCZz_3CefOjebEEb44UVAb0s80x3vvSocY-VXTWtR2x0IBI03bDiKhV49W5-7iLXCG5BaWZ1iv9EScSJgZ8uTNnT0v46KyRG1LlFQF91SiZw4hRJyP3j9RhXj6hwHvQiFlYVHJ6yBf1dlvMfvuTR3050nKFzfa4Qs4OGB0-zaERQBwoirG1p1zNYaddRds0siBgUEFNxXAYGTG2ImJu1zJ0TTbWOxT_1UrYWUpI6-hI7tqRpgXG55i9wD2DdXCF36_bT1bmD8HlWFiY02As9Ly6YfEORTyln7mm5McSj0FObWmA6gSV6pLBEsTXD8MPKhYVcryk1WvmW6i47oMzm91nrj8-XacuefG_AJvIpT6dRT2n0yFq8K2hOZPXUDFmAWj4syfYePm3cK6KNLl3XAF9pUHPBvfT4OIQ7sMAnU2-PijKM8jeXWCgWN_kPgMdCZbYwKvfrg2Aq_udMa2YnZ_25ZtJGxozVnWuclMRDLcKJA5BrPB--D4MpwUWzyn0ilXtViqKy3XXhmKmGyW7wnrgW63n634ro6EWDfuBSQGj6w_8z9sLVOxLuqPkLx-aWSYQYzQOf3TpVs2hPio7k9pETS1j-1_0USPhNHngQtK4X6QpRIB4NQ0cno1jzX2Xiy1K2n6GQ5eU9pZjsCRKFpRKaqkZ1HLgny9C3lriKd2YHFINca_U4VJPc8RBFqN97oaGWawT1ycypllglJU0bmDniGb5LKBuNNV88j-q8W1DizikhDUOEwiLhb5HUQqAF_Fb2_9FM8dxR7jtDYiHT-hs1D37eN4AIsFvedBoqn-9jVrMSlrrLWAjIDx13E_BcS0f-Oq-VNBwMQH8oKJSKDbXi8WuWZKPPOFtO0MT0NtfPmAWKhbRCj010JaGQP-Er8bdqbVfJUa9vUNWsUaCqBzLW0f3ud2hrZWLf04ZM70gcsF2AzOCIOXkj5WJNrl2zNJ1kHaUIS8_Eomap_pnWnhD9TVsI37DgPXdiEzcz1Az4Ivb4-C3XDDfpdz8juq1GnUmR9tKY&sid=5d0db1ff&fp=chrome&flow=xtls-rprx-vision#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAxts%E9%94%80%E5%94%AE%E7%94%A8
trojan://SYkPhwiJzZ@de.yienergysmarthome.com:25493?type=ws&security=tls&path=%2Fxdlbv&fp=&alpn=h2%2Chttp%2F1.1%2Ch3#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATR%E9%94%80%E5%94%AE%E7%94%A8
hysteria2://6aca9680-1437-4571-cf52-ae493ea0bd54@tk.yienergysmarthome.com:30582?sni=tk.yienergysmarthome.com&alpn=h2%2Chttp%2F1.1%2Ch3#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E9%94%80%E5%94%AE%E7%94%A8%20%E6%8A%97%E5%B9%B2%E6%89%B0
vless://af91c793-a489-4528-8044-0131d2d5e93b@tk.yienergysmarthome.com:17934?type=tcp&encryption=none&security=reality&sni=apple.com&pbk=xL21uwyyejdIyZFs6V8MvbkQuPQ9Qprywn9XL7IdTF8&sid=7c58b94a&fp=chrome#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8RE%E9%94%80%E5%94%AE%E7%94%A8
vless://9c9ef3ae-cfb9-4527-95a2-fd3884bb2c53@tk.yienergysmarthome.com:14260?type=tcp&encryption=mlkem768x25519plus.native.0rtt.YOsGRLycXuWH5sBlJaTI6JZHkjwDm5qn8dieDyAhHBeJpuCk-wh1pVEbTVC8hxmzY4Rn78apxFJsToS8SXJDHZiiHAmhITIJpup8SnYGF6RxSpsd57EH9tdcNyqKBTA3ufpEwEiHvohN4gomdEcsD6OSI_geCvWg-rQ02viZLjUaCAg3qEaQWEem6-uKMCiNn-kW1bAGi0Ih5_pan7OkVPNl4EIGHIgOC-SkEPMKVJlvwex5M8O0H7RdlhExoIh6XSIzaJR-lddtMJBgPbCAA1mY0OYJoBMnbQcBs2BArQgpFSJX04AhqWiKgFB0j5ttyZyMiFB0IHERpKS6p7t4PYVOO8UDwbAfMVlOWiG5cQCMTnoa8thGNHgFXYV5-aJMYuOL0YY8jIWYd4dkwQywbwus0PRn3digSQtGKix85dlIJ4otFAO4CzeEj9SiuBdhK4ugR9x5dEAky0RbF9yE7gbOUSUJ4ji6cJF1gfnKO9qR4quKPsC-qBSPzaY8Eue6dyxPrQCn8tOi0feezXcEfNIwNeWeiHy5nLqxBWGMoTexJgF3cVjKHDpH--hLYNR8neoFV4dzCwMHlOcY_rE9n7tZrJo187qirbF-Bze68qVuJIYQEWApOlqyfPB74Bo951NmTmURHeyQfxiVQYg4uFOWsoF0jjzBO3lI8_IIrTfMO7Uqz6mVp6tBbkAnvas2VpNbJYhT3iSmCQKqFsRJ8xd4rSo9h4xG0juhJwJkHSUGf0BG9FV5neZo54p9JGsV2PInzZNWxyhSMuQ0wkoupnwbEEN7ewqTeMNUyCsdQWWf-wScLwC4e4Bwd9dtc-ukyBpt5ih9W1kFICZ1poGCXURrqFVBhdBqgyfMfGwm4accqsViiiptSEjFK5KSjuVQCaRYFbKeQLTIVbM737Ys52Qaaqu7OpU9NfYrrJWRmQNetdUNDek_baQmNsFasudsKRQXVChR-ZwpqvRIn9UCzsR7F-yGZcRAHrc-X_q2jHjCntoyPhwN1yVpnvCFF0cg1NKCH3st36IoOmhMhQugsykqIBq9a8QjDtEL8QvFg6EEvgkks7dmCGcmaMiN81BPYJKIaLoVDFtI6Vy5yrEwP4yYRgoE2JgpTzaHZ6O4MOOdeOex39aJRpwBC5JhgDYlvqF5EELNQWYsbBdfVbwU-ZuTX3KjubWekxUjEZPPMhsY9XRkkMdQeJO9u-oxSLpQsieYvjEWDlCzEYOJvvOjuDQY-6VI2sy7padZ-tmPl5iBq9u-JtV4dIs1TEqqubgZB0QIx3UkEQC33EBTM0BOOwIWbZYix_Unt_JZPqUyKXqBsSQLm2wsQQdFg2e13chaJ3NAG-NlpOQ8VLMp8IIrECZVJFUODCArzrWrEFoe5Jc4tdVOD7imhXEMltE1iyWnnTatDom8PYdvyzUnV2u_BwWZAwtyfOpP_4l9IphJT1MiSEZmZVR_eGQ8yJkR9Ckgdth4AMunZLTIvqKhgSdR77ZVQHylC2o5_qRhvokLnyuA6tABeOUvSzVXQ1SXnqIs3GXWryzteWwf2Emfyg8i4FwI5Rjyq-BfIENA6TpGciU&security=reality&sni=apple.com&pbk=tJW-G7bTDtjJE69T_ofBkjDe06dsDszMX-Tt1fRcTGE&pqv=y4FzaEasN9ImYp3PqMOB7uaRqR7fwhdOCTFMkGfZ6zDWp3auJfQY6-BIuM6c09Q3rmZaV2Rh61N_jvDowBfc6F1xnOs7HdPTt7CWR_9BeBwBnKw65cTrSTkj8iG-rek6NV3dVOyJZlotxWOW_kNNcAJSuWm1JpquhJvZWS_sLh53X9mEm-zJu4hMphCi4uoePJMqWRpUqMm74v_4Wfiz3ZsVQ0141GDu29-HpbtY7gsK0X-m42wN4p-uhnmdS5gyhPTtf8mz1emClxHnjTjL3B3omvilV65Ge3WUEQoRTuiK6Q8G65F_UGXaE1fkbi-POTbBl9lckwTUt2e6Odp0QK60FF7-gQ9jKGqpdnEuzcDuFFTU75YGaw1XKKUSJyK3HJH3ZMlqaRM0_0mO-my-NC3yIgZ6NVLlS3lAePwLPO8v-UuGPW-Owiv1FvmxE8hiw0koBemiZC2PbvNHJgiKHwLmgpwyl4SfLt6vLVlIbrfDyaURHcC796VFUz8FjpoQ4KO4BmsgpdbwKWu0R9cGxo_VBqNd_XAkmqTp0YVaRy9HQ2cZl4xo3lTBBfiwNmhYT3X3RPZyutuDXvlTiDti4sGpKNsn51JpJip1om_mjMF_jVHew0qBbRq7G4Bo4ldYPFzUY2jrBTIaaxK25aNsvMSxve5z3v8LmMUdfYmnGqX_WCU5XDK6E_A_sF-yqot3Y4HqDpLlbuiH4_XdcMkEhnDh5JYoEQF3nU0q5QLwwlnxJp9GSeQhtHOjippRBP1GacAIDwJPu_68KI4oZUUsQVvTgDOqcYSvX8nVxoHMEqahaWb7oqHVYJ9-_RcwdLIYjQZTjpJWrmH0nJrgsgabsPqUGdFzyFgB081C_R354cXRe0Ck0KgtXTzRnhdMHbd3iEVzlhrvYAbfFJoW_W8woLelZ0KnsBaLhuBr_-aU_VL2ubCf2xVdaLSuCMmH_T3njlW2g9ZKtapY6vLS_quPc8nVdfeaupBt_TGO5yHCUoD4JscAcOStewZsihHQWajITpl7TmOqPYLsuwmql6u1hsADDGoL8Zr2jE6h7wp0XqaWnYrTMhp4NkGOB7II6CIwba_6v3cg8p-l74WQ_Lb0GWq9rbz1DkBlq4NFr8YTy83Yap8MmKNT3gWIhlFH28D7RX4LO_ved0itlqfos2w0sQWP6AnWE-Kf37GHReZNzfZJ460aTBwDZTbQ4z0o5lZndXiag6Hn9op-aF0GJmqrC3i4DHS-sE1viCgmGWj50-7AbdjqVC9Q8VxSgI1_5eAtiTFOo2PQ9FeIh9PVpdikbmGz5D5pfo87X_aaTQF0k8ZEGlOiK30qr4Uku4YmTFdqaDbqDSSq05GXtqpqV4WDR3_PcTskc8ERzVuXYdCkK2VOhOEp2htnZvUR4jESXBN-abzKeIwtU_3h8mgfDt6A920H_a4-ND_dqzmgk3cTImJtMtvBpPVeaAnJ7e2D3pApcKgo20xeNxWfSueB90WLYHD4XgGM8Ty2yVaDNQTpvSNEZP4OM1igDLAZzNm11VA3pKkjv5pBfj8pans0u9WOPQLvp0ZrS_gpbPCW5egZo8KPvaaorqS8IrcV0yoRXs2Z9c8TvmTrY5BdoieM2qJ1291K_oHbyfSekJZTFrTvFBPSuGSp4LvN9twA97H9EmOQBFCKLyoIOj1bol1Ud49boiVscPUBxJtbx9jAAd-300lksNsVPsdPxOVrY43bsDnggkhSK-iFaL_lRte04Lwl2vgunL7eCetg9ICPhVC-bH-lxtWwrCndvS5QITcIeHePVGCqBBPyu8EFQ3zHfyzx14tDOTpsmjIXISab7l7_mbTLIgGIH70m4GHTbqqhIoy5s7sGRqZWOZqc0sBSB2-HuWSCuvBbpsgxNv-mnP9-DTFKyrnMUPcj-tmyBkPiQCxTGKfrEk0gs4EF3bXJyj6n9sp2_Sc6EJpEl75skXOp_kfGqZZs_401gGwNhiFOMajEk8XF7rv1CKdzizUjdhmgmfiMBaYp05fUa1ts0vYW-6MXQooWxBYYiI3M53ueBIWJ_O5dLAqAmwuS17r1LJsJWckYsGX0CoeBOzYlmwqPanpXn6IjLfnfBlV3-S222t-5KbXgrFtlbXb6vRTMweo8j1TmtvNcbLW4sU9tYEGQpbon5dmrYa9pVtJs73DcMW8UlqqtvGzb_yT64jBxV5SQCn5F5IqM-iJopwoxqxbk5HR_0b725ZFCuGdL-Fsg3_Ovs-djK8oZ4a3z8Z9p2hVChl4b-xICeohx4O4CBrw40tp39-iJpshdTQyD8j5-Lm9MvPg-31PkYvoeoD_aw4TTQ8EQmT1H_mNfl3bTrTFY8TVIJHW923zs5thbAtdCconeOtXDNFhIRBlr5NKB39DXBcbvhh4n0dE_9x8WWwdMbNw5EAXlccWswmiw3oKwniNw95U3-5uvRRdQ66O7Nj0Kwt-5AL-H6O76PGIeNH-0bQkpS6rkFyMqfMoHE1L5GgEpQvSrhbDqo9T4O36jTteVae2zuOg8ETqDSA4PeP_M2B0Rld8rP0KhYSSUrNlBz20-zhAr0EnL_sGnXlbAknYKVm57dGEzrKmCtl36Owwe8rs&sid=f1fc0563&fp=chrome&flow=xtls-rprx-vision#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%20(%E9%87%8F%E5%AD%90)%E9%94%80%E5%94%AE%E7%94%A8
vless://9f9ee382-0178-4dda-89b9-9cb05a70a828@https//tk.yienergysmarthome.com/:50249?type=tcp&encryption=none&security=tls&fp=&alpn=h2%2Chttp%2F1.1%2Ch3&flow=xtls-rprx-vision#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8vc%E9%94%80%E5%94%AE%E7%94%A8
vless://bWxrZW03Njh4MjU1MTlwbHVzLm5hdGl2ZS4wcnR0Lm1YWXRPUnhRb1VoV2k5aU1Telo1NWtiYlZEWTQ5RnkyVUZ4cE9HWTZfUVk6NzFhMWNmZTEtYjZiNC00ZjNmLThmNmYtMzAzNjVmYjU5ODAzQHVjbjIueWllbmVyZ3lzbWFydGhvbWUuY29tOjE4NTQ3?path=/hxhxyzy&remarks=%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B001&obfs=websocket&tls=1&alpn=h2,http/1.1&udp=1&xtls=2
vless://bWxrZW03Njh4MjU1MTlwbHVzLm5hdGl2ZS4wcnR0Ll9TbFlGcFJLNWtFNjNtamN5bGV1a3F2UW5zRURvS1RaV2FkdGZFS0kweXM6ODNjNmNkZDUtMGQxOS00ZTliLTlhNzQtYzZhYmQ2ZGY5NjZlQHVjbjIueWllbmVyZ3lzbWFydGhvbWUuY29tOjMxNzU0?remarks=%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B002&tls=1&peer=apple.com&udp=1&xtls=2&pbk=LA2d3LpQ6514zPzbGTxie9tlkrTvnOorJEIVPolVdnI&sid=17e184db
vmess://YXV0bzoyZDgwZGQyMy0yNDY1LTQxOWItYzk3Yi0xMTFjYThmMDk1MDBAdWNuMi55aWVuZXJneXNtYXJ0aG9tZS5jb206MzgyMTY?path=/qqcndb&remarks=%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B003&obfs=websocket&tls=1&udp=1&alterId=0
vless://bWxrZW03Njh4MjU1MTlwbHVzLm5hdGl2ZS4wcnR0Lk9fZU1PREJSa1BsUmdYdk1ZOVYwa1p3aTA1azkyYm1oc0NrY1NERTVvUUNLeHFlcUxGUlFIUGlfMlVkTnZXVEM3c1FpQzduRDFIYVVLNUtVRklyS3ZLa0lHYXd0RDhUSVJia0Z2OVF1OVZHd3g4SXluUHlESG5ta21mbzVsZlpjOGFJSDNMV0JEWGNJZ09XelRCeWhaY3U0ckVVYThTVXg2cUVPMkNPeGtXUjAyQ2ZKWW1OSnJBRUJ0UFZTbkJhWjhZbzdfRU8tcWJNN2tPc0hlV0NOTWxoeVJkcC1LNUFkenhla2I5Q3d3ZHk0V2lwT3daR3pyUEpBcEJ1UVJ1dy1tSGVCUVZKdVJzRzlOdXNhRjJCNWltTnk5dnhTMDZaMkJyTkN5VXFmY0VzTnJnbk5lTlVZZ3hDV1NSRzJWZEhQOU9haE9heHVzb2xsNnJra3dCSjJqNkhMRVdYR2poWXEzVHhqcXdJei1fUnBrZHFyaHVvNk1SekctY2xndDB4dGxmZy1XOHd1RHprNzFWb2xLanQwd3FrVmNkYXdMcmxlTXNsS2RjQmdlRGJQajF3ZGhCZkNTbWh5cndqTTdyU1A5V2Nsemp5MlJ6UnpKalpNWHNkVWJJRmV0RkFuZEZ4X0xQTlJ2OUY5aFd6TWxxT3VqVGFmdGZ3ay0wdVVhSVZHYlBJemJhWXNtanl3bE5heUJBcXNKYk5QdGNrMlpUY3lmN2xNd1pwdERBd2NKOU5ySjBpLWZzb2VzNEo2djZUT0x2b3hMUkl4NXNFd2l0QVBXREFZV215Qmx3bDM4WUhNM3ZvS3RVb3l1NEtnbmlrdVc5YW1IU3k1aEpnd1VXTWNoQ3BJdmJpN1dTWXFibk1NOFJXZ2NQQVRuNHctMVFzdG5KRnFzNGVNUHVtNVU2UUdmQUlIVjhJeTNaYzJlSlVmYjV0cmxBUjVMNXd2dHF1NGtLbUdHMUpFTzdjYWVaTTFTR3F0S1poTS1LTWFwWWQ3TFVvMDBTSkJ0U29zX0NXUzd3aGtnQWg2VzhLM2tNWXdXUUtaVTlxN3VGaXhUNWRzanNDMnBLc1YzNVVVV3pLbDBZZzVndFBLWkVaVzJCakpudm9jMUtKSXhOR2ZMRUFacUhBdWc0bXhFVU14NGlDVnctVEs2VktKWXNCdFZZVjZnWXhsVnN5NGxlYWV3alFJc1RuQ0oxUXdfb1ZwOWZBS1JRYU84QXV3MHpPOVlsZkJVRmloSDZyQ2lrRkRaWm9IRFJTamVyTVR0dFVQaTZZaWRxdDc2ZnQtczd3aDFSdHpyOUN1QzlVRVZxR1ZVWUs0RmljQzBraUcxOGtDQk1tMXRwaGJGUlJXRjRBMlBlVjRrcXhSNWtWU25rR3E5bkY0alZkOTFPb2hKNmgyaUNKa1Nxb29iZWhWTXZsZENlWEtjZ0ZQUGpkMm04WEZQVVBMMDhCNnZFaC0wbFhPQjNsdDVsUlNZbHR5OEdoQWtDcW4tbXM4dmlDN2U3dUZzaWVBdkt3Y1oyVmJjcm5JWmxtMGYxaGN0OGk0QzZGTXJydVZxOVZCTnBWdVdCaXQwTGlxdUFCT2UwZDRVc0VqbDZ3Uk9nVUZFVFJPVUhhUFMxS3I1Q1lLX19RNlEwTlV5RXhyVWpvZ3ZNeGxnR2dlRm9VVU8tR3B2WmdYWXFEQ0ZMbzh3VGU4aG1rWFphUzQ4M0tWM3FkX2VvQ0w3LWtEX0Zka1VaRUcxV1Frc2pRdzRpY2R6enBGaE9pb0hJVWdwLXVfdVBSc1I0cXdFeVhDdk93ZmE1ekZyZ2MteVRjTmxUY2JScFZGbzRwOU83bk84T2cwTkRKN2xCbzlxYm02VXZsN21JV0dUVmRhZUJ1NjRxWTNyR2hHNS1nM1BXSjc1UkxQcHloMW9DSUJyVU5QNWRzaENEUlVTOGU4WEptTkgtUE1fa2E1NE5NX2ZyYkVZakdyWjlnb0ZLbkNUbHFCWXBNOE15UVR0aWxnTDVnanRyVk5hMnllWGJTVUY5RmxkU2xONWNoV2taTVZtTEdPWjljcEJOaU5wWGdHQU10S1VuZ0NuZF9nRUhzTklhcXNuUmRlVVZZN0VZVk43a006OWQ1YzJhN2YtNDUzOS00ZTNmLTg3NjktZDBjZGJmNTdlZTYwQHVjbjIueWllbmVyZ3lzbWFydGhvbWUuY29tOjM1Mjc5?path=/zrsbyy&remarks=%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B004&obfs=websocket&tls=1&alpn=h2,http/1.1&udp=1&xtls=2
hysteria2://48cad321-8fd9-44dd-fd12-4d9d66280e25@em.yienergysmarthome.com:29854?alpn=h2%2Chttp%2F1.1%2Ch3#Email%E7%B3%BB%E7%BB%9F%E5%A4%87%E7%94%A81
hysteria2://aad15791-4c2c-4436-9b6e-5e5f1e7aae40@em.yienergysmarthome.com:47933?alpn=h2%2Chttp%2F1.1%2Ch3#Email%E7%B3%BB%E7%BB%9F%E5%A4%87%E7%94%A82


`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const isSubConverterRequest = request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || userAgent.includes('subconverter');
			let 订阅格式 = 'base64';
			if (!(userAgent.includes('null') || isSubConverterRequest || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase()))) {
				if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
					订阅格式 = 'singbox';
				} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
					订阅格式 = 'surge';
				} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
					订阅格式 = 'quanx';
				} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
					订阅格式 = 'loon';
				} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
					订阅格式 = 'clash';
				}
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
				if (订阅格式 == 'base64' && !isSubConverterRequest && 请求订阅响应内容[1].includes('://')) {
					subConverterUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(请求订阅响应内容[1])}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
					try {
						const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': 'v2rayN/CF-Workers-SUB  (https://github.com/cmliu/CF-Workers-SUB)' } });
						if (subConverterResponse.ok) {
							const subConverterContent = await subConverterResponse.text();
							req_data += '\n' + atob(subConverterContent);
						}
					} catch (error) {
						console.log('订阅转换请回base64失败，检查订阅转换后端是否正常运行');
					}
				}
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			// 构建响应头对象
			const responseHeaders = {
				"content-type": "text/plain; charset=utf-8",
				"Profile-Update-Interval": `${SUBUpdateTime}`,
				"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
				//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
			};

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, { headers: responseHeaders });
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': userAgentHeader } });//订阅转换
				if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				// 只有非浏览器订阅才会返回SUBNAME
				if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
				return new Response(subConverterContent, { headers: responseHeaders });
			} catch (error) {
				return new Response(base64Data, { headers: responseHeaders });
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}
