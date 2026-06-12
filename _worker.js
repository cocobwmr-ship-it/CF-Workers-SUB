
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
vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICLlvrflm73wn4ep8J+HqlZNIiwKICAiYWRkIjogImRlLnlpZW5lcmd5c21hcnRob21lLmNvbSIsCiAgInBvcnQiOiAyOTA4MywKICAiaWQiOiAiZmRlZGIxZjUtMzQ2Yi00N2JiLWQ4ZTktZGYyZjkzYzE5Y2M3IiwKICAibmV0IjogIndzIiwKICAidHlwZSI6ICJub25lIiwKICAiaG9zdCI6ICIiLAogICJwYXRoIjogIi9kZnNkIiwKICAiYXV0aG9yaXR5IjogIiIsCiAgInRscyI6ICJ0bHMiLAogICJzbmkiOiAiIiwKICAiZnAiOiAiIgp9
vless://34a4e1c0-10ec-4140-8872-f9a0af849253@de.yienergysmarthome.com:40124?type=tcp&encryption=none&security=reality&sni=apple.com&pbk=1g8YhsbWbHxnCX0MD9NuG4BSJAwFGtXP0x_zUKkdpwg&pqv=3IrS3U7XgqwxvwkaHIl-AQiK9A_wkLSTpDsbJJ0AqjZ3u0orKfHuZoyd0W_iRyPJPLLTQwgISyPmmoNyupWe1UFap3MY-lR7jkKJzv4bSdARO1LmRG0XXYLrPYyRf92HmSSxxuuWm3NgyVrxH42IrpfpL164uJ3D1jMIUgz04SFj3L6ksQjwCE4z-1nGBOcKg5cvZvgYDgQJ2zC-K86A2_NuCc8QJZlLtXX8vz2jDCsQgeMYlH_bGkeS84LZR7cogaZQMCWwWlFbWZSKWX4W8XCUl2HuMPgMkOTY1camDqka673PkFbIzVMzxYpp0wcMd2WsppPPqQjVlLsZgwvY0cy8-hQQOL5G0JDHxY24ZfOVrmlQKIcE_9yNo9eNGRN8XkUDzrI3qX64uLh2pDB3vJ4m-Y0wrE86R8KGkP1qiS2UcrTQYoh1p3jHzUIcDOMgzz8bulyh-InxGY1oWrApWC2kQdkg3cw8YvICIUkVUFndu028AgD17cYpLWVCML9grkGFHLVa6K4fFmXjDh3E7crT_rx1sm3ZMzfJMYw8W2EGjNP9tS6zlWHna4QbAZ6oNcTsPKHfLlLzmck8-NjnDU3PpTqRPCxQfsjfWlQZenPpTNQhQ2aHJ_VbBSUPW6ylzfF3HKejpB70xZw1N2-jEmL6RxuVr4J3upiV-so1rKURQCXxS7kHZUMgcdi1w3AjSCZ2l2m0kzrFhY9Ce3roBVuQroB8hAOClgwrBKtcbVB6GmM6t7Let-cqs3mrQtxUecITQQe_JPZVO3WozzU62JU4k6xguFeDNgoX3eGqY5hPaI_mNW9diXVAWyNUD3q0IMPsr7G_J7piafifPSM8lHO2z8O0sCdvaOyvlrVlJRQ9cPJ_x2MvKaCT4eZ15K98fevGm-2IcVjz-7qb5rPpltHTZ0vwGpjxdSQLgssRvxsK5f2RF_rrmdUxK3uWF_hkJWA3Tu36o_goLMiukrBALKo8qGBKhqvKn3CI6eDd32xxTHecYbwtyObVqTWb7jUi81fCTSmU0mob8-tTf9jPNoXZ3skSjl8kxd3jJDvhpJBcjfOQahI6S7m-e94yPWDY6rdMXkw7D7acPwoQqiY8fl8XGkOhiPg06eEDgzaOeoha9eYl52IyofoBBsn3R4iGU0n0q_Db1c7VrJKjRq_CfF281UYs-nlb8Efzu20RKU83l1vdfT0fJlXqyZZZWSdn39CI1aAnYfG-mz0Wx9WC-lhtwUY1_uqF1qikBi4rSg_exry8N-OoLG-FQG1vahLkCGiijRJY-KGHdXkcT_yGdwomPNIPz8GT_lkxHe9WxSArRYWR-uSQktAPz12yctHavlx-8C8xUQx3o_RpxikhlztG-pj8jYf95XI4E33hnqZz6nqvAnetk41mv1cRLIx1sMaBCZXjBE2k7FE-761ZgoaBGnOt7B4wyb8Qgi9DVTOwTTtm3m9sMIzE0gTw9OgmG_dQYWYhxFQ9wETBibt6wt16WmdJ7wIau6jKm33gzZhMLYCjl1G6uUMvKkRqqYTb20U_pFonUworBbxR4in275c4V2AgkED0-VRndyjHWHiljGwWTeTwVS3Vu0JH5GnTyW9QjxpSETjZ1w1Mdxb38ejLNJY7HgEPStZpQQVKRC1jkWnDDiGFtjnP7Z2blpNTaZJ5w2VUYdous78-j6Q44YZkj71Oc6gtjkr0T2ZMtuOSqRYyWC5_U2r3CUSr6S1Rz-QfZJeR7xk-59k7j3dS9OtLkKfi7h8VcaNJiGusNrtwAVwfVqlIyIim5KzPB6IvgFDm3urV4r_xldIzmPxuGWQKsM6iCE-AtWSl54DiVCzQ0ARYCXXC0ayYsgfFm_goPnUzn8sYLpwFlz1d0Jak24ohh9X02iqQQ1DKmOkZYj_kio4f3AmSiA8n7C9enxX_blvJVrbl59yOUPFlnk_4T6M7NxWXGoxgZHIAHgsrBxuO4UPn0DQIf6bUU_Jdv_ZB1XGXjjIHP6WuigIukxeCFe-YvH5vcWwJSiOpqXejWJbadkuDjgzY9W-vYpGvxNWrMCf88Vxkr9sGhyuMTeHCA241LEbEjbr5gWTS4Xz6bAZ9laWEwpGfyvBP9VkTcwK5QKg4pgpqgUoJMKj7lHqqMi34YVddbpO8k8u_j0krVs75Piy_ncs7XPh6JwpZ63wxrxuoEYx040cZ3Vj8q0DsPg0_WbZtdKRfm72wrYljHmMJpv79U9gV7r9VhK6YdARRiQXTqawVvZOnbLrMvvkqklgiNOn8rqhNYkl2bRYlLTzWjoiA0DX12-grB0mtNqM6X5uOw_SZ42qYNfpX08Fn7YhJMplBqv6-7QO_VqVnm1qgDeb78hT4TYK2E5BDm8fy9rPMrfG9_GByzLgIt7RxKc7Y3RorgJcQGCq3xHk8SxMc_vcyrXsyT356GnawnhytYKFPQZue3-HK1WduwaxCWh0NuDq2uQz3ME3xJEa6nJSWbIvcd7JyNB--3lAbh6-FHyiE-V8XBQupNgqNWjkIVgw_bkNf72W3ejiymWCabKRTpevJI4scsAm40zakS6TXrO1K2mwC22gd5q44I-wqY4amoWLBTFjIyDanS7-DJ5s&sid=b333089b&fp=chrome&flow=xtls-rprx-vision#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AARE
vless://de14d094-e974-4d04-c1b0-3eab0cdfea22@de.yienergysmarthome.com:27143?type=tcp&encryption=none&security=reality&sni=apple.com&pbk=pQuJwAy_KfDlCV_YrM-4ryFRGIoh3pxr935GKN4iZBU&pqv=uwf5QA1nF2jAG7HKWgskwGwYzga-1JZ3kOGslkdNsMKSWWvk64B1-GWZ-EXtV7oa0qEX3VnAGwP2Y8aVdQVGU4_KmmIEAc8cRPTMDFVTWM8XXFacCll6dk3gQ-ZxuGrJyRDbF-0jUkskC_Xf_jpBCFjwBcJULeCi5MZPPgzgsZh1Fve5xy8M1Cf7dzD2lpLbBbBZMK8JBznxGX_86FQ5Xk7vso8hwN-rV3y71W8gWpuuz2YRPZfxCDhFTsoJ7WAn7dSSLVQMW7eHYdUXXLKAx0NkdhJuYEwri_PqyHY49Ufcq7QTeCiZYNmFqx2gXXhKySuGObTcuNg6ZsUor0SZFbffBFbVQ3EmJ3HAu4zvIA8tW6kZrNxACrF-lpe3T59OX9uNhV2Bbd_YsCkB58X1HW5X08gX2JbIlsMpyw5Fd9j_D6pHSINsSC53QwsVnHGPlJREQuCly2Zb1eYuunAxoAqoTxccPUhbdJUJW5ai7D1RsOxZKm6eTePXQV04iYI5cK9W0qoJa3cZ7aVqXgebJ0g3bQQ2GrgBefPstji9tcArmNIUsugbSHcvw0wTKP_yNsHAv_YCN_wPcukmrysWmYfEDKe246QJBU6SEYZjTU9eC13Gwo70iFZqCD6fdEdsS4xVtQsacAJcY8THNhEwn9cn_qJ9fyAfGAibWUh9VgnDdRYpgiloUU2LXoKAbw0X3fj58OX_FJeWrOgTGWKlc5BtKXieE2P7V8cJLJyILAC6Vj9PfTbKgdmgak1stWCAt9iKYeEHUxOQwYgkLxYxKbk3rRbpMukjWQsyGEcq4tJGxkRbcgVXP7SkWapbGjHvaTmG71lJ-crXPE8VRdaWRqWaNDeceoYIY-0slmUSCxuAbLV2IYF1NBASt6YyHxjAbwS49NYc92867JSFWhiDx59IiMHsf8ddIYEazIeSoV4m-ONMbXAAdYkusDUoXolt9Z5IDMo1gtipI094PxZKDJ0qSdb1oqW75s0taZJ1xgU-ktqMIigw9jZGwuXTxg-Pofkz9sfgbjQOYtGRml6gTvTG2hwmepnsMslXiXFKVUgaPNQ55R_Q6VT-SPev2sUNjt-y7_HOimZ0sq4Va3Nu6yoVBLRCoEV4pYMyosrCzc83zGoK3CyWWJ-qCR2HmpEVGf0-wEOZt81pmLg0uo3Z4LvN1tnsau2PBHWKQist8zJoGlfaEktQxRWYwuAoPTpET3uYXmcfnjI9Qbi4mpXvks3IvEvFOaCkpWip2P5w7yhM4IBH_SMvQhUUquAIaolQ5LSnUsf3V0ElUx0gVffTt7aR-_mpZvegBhsLhpmYvChq8qktw-CuFFfTY4oVryD_5nF2wPl6ctwSmb8w1lo7fLP4RG1milVmge04ibK1MdQk42_yfJpzS4A9eUMI822iXcKccgGWPZSDUVKK4rN2dAb-ijn68jLaiuyXUwOPTKcjksAUCj3k8hZfgvk-yrM69SV7d2Vzblbye_P_pf3BrsRF8b1HsO6zdV_-EdqdriNCxZfWUH9qBhn2qBjtkKqgh6UA4eM6efA8VB9GhwXZ_uC7FIo8uzJ5csQf84OHksvbLDU9e1upPlQeYoxmVDAtNlXKWWfkO_2-J9H1jiDFbI9LmoSu6weBKL1u3JZ20BsMpRXdxvHlGmZ6hSQWpzPoylSOnEPOoajWTcW-qK3G3gGfdsX-ea_AM6lMkN5IMMlSUBdmiM1CwZHGTJXxVkDvmL9prRt3J_CG1ffWExAfQZ0BGQ6AVX6wLeGmGFZRoKYjpbzxebrW745IVxvowH1oaYeWLE3KqKmPCkVZDwJCEX9lrH1sT9AB83CXJZBAAISUIKzXJmf-eANXZuf8EAoutMLDBlsQN6zrya1OPqRakYbmrdRa0RiAuK6xwWbfKN-uz1E07xCs07MEA3-3jLR-F6MuUgGBXw5TGk5IwU_iy9xaoXuCYgrcMJGmhq9yxxcraXkqlrpu9ugBZD3S3mTd2pHdtm_UYxdT0j-eSy2CURLiZliBH6I0-YGfU5qA6BUJqQavx-FITRrtNQ_6kPfj4ZSc55zresKo5AhCEntWRDq6hCtuXyIl0phKJmMuZzoDVV5JA1TvHx4W6E81JGhu1XKliknTSS0mBc3TKMGBdLmWII5Z94jJrCkVeNYTyobLWLEdpXTRwP7SeULdLsDEkzw-bdnqnq-ERUKDNMHg1wDyPKqFpe1dYWIJpJqHtrNhyDZtCK-VrDlZUGMLaLJwjHYiU26Xft_k8fdi0-NFoi3iZhAwCa1x3ob9a1omWrOxSsSZauDAw7wK-RKwsnpNDmw4diAVxQTfZwQnFUJqBfDLxDElkt_fGAJRLUgUyFU2tr0Rq1hdO9tDRDNZ7lnX5cXhfawJVjjV4zbUrkd-ZK7Zhu094Ek-LXZwszVx82gsWbW1GruGgFAXdn1iIEkt-UuIHyIs0AsMjRiK4x-jzRhKSDq6cOgW10y2WV9H11Wo5qWAhH9YHgqG5Vd755Kux6SoeueTq784Gn0Mut-lbIcWDPRBEa6WWFxLN69W4O5mf1V7YBTGVmTv36VG836tncKCCjOjxPvvHsQDJVx0SXVwexLkPglKsQ4sqlQC_Vk&sid=85b80697&fp=chrome#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AARE1
trojan://SYkPhwiJzZ@de.yienergysmarthome.com:42741?type=ws&security=tls&path=%2Fxdlbv&fp=&alpn=h2%2Chttp%2F1.1#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATR
vless://8344f431-926e-4777-c049-c2aa07b16a8b@de.yienergysmarthome.com:56996?type=xhttp&encryption=none&security=reality&path=%2F&host=de.yienergysmarthome.com&mode=auto&sni=apple.com&pbk=X2HLFnAutiGxWc7fj4a_laI93Fm71IEx-2nKsF0ZYCE&pqv=QxR9ktI6j54XvgXHpsERXwg701Cqi0rVc3fdu7g9n3CyfEtwOvF17_-1xk_utN0Qm2D8lG_9x3oQnk555jWRBuLPj2sAXjXsN31v4VeESIDsMXFRuRo1KT3FdCgXluYbXqhJFCWth3eQwKeiOQOf39uztJVXt-aSlzwon74S4wMV8ctU4Cxic2RLdrlgjSbbizOzLKd06Yfdtqu0A0DE0rgb9q45qEfSI8dxRNyGKRkNgtuduJr4DfwMbHZ5l91IA_gCagFd4UCBmfXIJFnoDvRRz8vh0Klem4gPj2RYc_Uw3TnncM4y5JehM9pMq9kXPVvD2-b5vnWsukOJbDYdgO5B1n6DBsn71TtxG-gUbHP9_Us9uiT7An8anD3YfO6LCmUMDe3Lod4iMQeU--e-GQiEfCfs4eUc4r0kJs8M7rzq2XXYw2ZCa5iWfZX1Cn0aLq6UEyrbEV_g7V8okwe7isjfahliu8XSW6YBx3TLOHgXBZqulDN8SIuVMx5mIvWZXIqbG0BiJpdZ3CJOVpMBxVBGolFn_ADuyQgg18sue2sOxKugSrJaaqtU5ieFirzbCOolR8ePOH0-Iedrj7Q2LhQJjBWwbZ2bVqfPZiyqgbrfwmyyXYyaF5PVpDgNPqNaYgrsGQ4uLFvdpCgEjKviJGFxn8pW0inhRzZyuLD1Sm5DN6GWGLnPmU6WF_jp4DViN0_EfZChpU4u7Gd33SdAifgre448Hh7lr6jEr4wl9DMBZdkBsAeu8Uj9H8RgI8i1n4YrryUgIkULW7f3nB1fDMWVoTYkYOh6rj3waTQaErPKwlI73CmmcPfE3Bo0ksWeiRqwrA5HMPH8FcibVJ6aovOjOtKL99yVi-dHZP07HqTtyGIOmY0x74l4UBSo2LOZlbeClWFis288Gt2t8VIvtTMdQPjLx7cq4DCcKQlmMaWLu7klBgcEn8jy0ElVmnnvrFRss-asSrgQBqAx6cJVEVM4DwnTRyhWj2F8Pi73mdD7c9W6sOSAFbIwVei5LvdhmyA-8xIyfrPGH7nZzpLftRP5y5CgRH6SqM6K_FuxBijfF3pcilFcSY7TAr5etFRhKieW3uSVBcz77yge3gJjsX777iJGLMePHVpP_tcirHLCLPLrtgVqpDpTM82LTAG-pGtTRnb-jMu-CzNhZSnR_vQRnJQ0jyDOm0tsvuGl7UwXfIycxpEfFRdRkRyFQxdiq5FVbDyTLIWwxtAIBinDmElYHTSGLfQ2QLYFNgFppuhq8H5hdtwVwghIiTD_3TXSetmo0e3lLVniSQEwgYsxP562vkaId6-nn2rEfsCkMlAB2Z7Q7pf3Xb7XhuUD-ig-n0CsNbObA7Tm-jP7d6vXJ0Xbya-irePdFcaTtZ7v-tGeNJkeWsDmtZdCdRFXhL5rU7NcN_1-rRT12T5J7rws6ZYN9vFMZp_4l3NYzzcrsN-cf0mdoEq-BMGNFycPalQM1-7wdmzCLm-VoLauvgfr3_uQg62AUJhyeduPmaGmOfGsocqDPuIXMwpC7TJPA_z4nxcFRm3-psg-EHV08sIcV6hkVcHSbu8kDdiRCZz_3CefOjebEEb44UVAb0s80x3vvSocY-VXTWtR2x0IBI03bDiKhV49W5-7iLXCG5BaWZ1iv9EScSJgZ8uTNnT0v46KyRG1LlFQF91SiZw4hRJyP3j9RhXj6hwHvQiFlYVHJ6yBf1dlvMfvuTR3050nKFzfa4Qs4OGB0-zaERQBwoirG1p1zNYaddRds0siBgUEFNxXAYGTG2ImJu1zJ0TTbWOxT_1UrYWUpI6-hI7tqRpgXG55i9wD2DdXCF36_bT1bmD8HlWFiY02As9Ly6YfEORTyln7mm5McSj0FObWmA6gSV6pLBEsTXD8MPKhYVcryk1WvmW6i47oMzm91nrj8-XacuefG_AJvIpT6dRT2n0yFq8K2hOZPXUDFmAWj4syfYePm3cK6KNLl3XAF9pUHPBvfT4OIQ7sMAnU2-PijKM8jeXWCgWN_kPgMdCZbYwKvfrg2Aq_udMa2YnZ_25ZtJGxozVnWuclMRDLcKJA5BrPB--D4MpwUWzyn0ilXtViqKy3XXhmKmGyW7wnrgW63n634ro6EWDfuBSQGj6w_8z9sLVOxLuqPkLx-aWSYQYzQOf3TpVs2hPio7k9pETS1j-1_0USPhNHngQtK4X6QpRIB4NQ0cno1jzX2Xiy1K2n6GQ5eU9pZjsCRKFpRKaqkZ1HLgny9C3lriKd2YHFINca_U4VJPc8RBFqN97oaGWawT1ycypllglJU0bmDniGb5LKBuNNV88j-q8W1DizikhDUOEwiLhb5HUQqAF_Fb2_9FM8dxR7jtDYiHT-hs1D37eN4AIsFvedBoqn-9jVrMSlrrLWAjIDx13E_BcS0f-Oq-VNBwMQH8oKJSKDbXi8WuWZKPPOFtO0MT0NtfPmAWKhbRCj010JaGQP-Er8bdqbVfJUa9vUNWsUaCqBzLW0f3ud2hrZWLf04ZM70gcsF2AzOCIOXkj5WJNrl2zNJ1kHaUIS8_Eomap_pnWnhD9TVsI37DgPXdiEzcz1Az4Ivb4-C3XDDfpdz8juq1GnUmR9tKY&sid=5d0db1ff&fp=chrome#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAHY
trojan://7XY3uKSX8k@de.yienergysmarthome.com:52141?type=tcp&security=tls&fp=&alpn=h2%2Chttp%2F1.1#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATr1
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIuiLseWbvUNOMi1WTSIsDQogICJhZGQiOiAidWNuMi55aWVuZXJneXNtYXJ0aG9tZS5jb20iLA0KICAicG9ydCI6ICI1NTkwMiIsDQogICJpZCI6ICJhYjIwODc5OC1lYzU3LTRhYmEtZWQxMi1lZGIxODk5MTZlNzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi93c2NxeWgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiIsDQogICJpbnNlY3VyZSI6ICIwIg0KfQ==
vless://44b855aa-c929-47ec-8d29-1b8a9034cccc@ucn2.yienergysmarthome.com:12683?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=AWvcXtUhpbmcBK58gyQZEK85crV8C_sFvkSNi2n8OBw&sid=bf114327&type=tcp&headerType=none#%E8%8B%B1%E5%9B%BDCN2-RE
vless://edc98e8c-62f7-4012-8f5c-b5815a361a53@ucn2.yienergysmarthome.com:33593?encryption=none&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=tcp&headerType=none#%E8%8B%B1%E5%9B%BDCN2-VL
vless://55d8128e-f543-4357-91ce-e68803d027f6@ucn2.yienergysmarthome.com:16770?encryption=none&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fwhccrb#%E8%8B%B1%E5%9B%BDCN2-VWS
vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICLnvo7lm73wn4e68J+HuOaWsDEiLAogICJhZGQiOiAid3J5eS55aWVuZXJneXNtYXJ0aG9tZS5jb20iLAogICJwb3J0IjogMzczNjMsCiAgImlkIjogIjBjNTgxNWY0LTZiZjEtNDFmYy1hNDkzLWU3YWEzNmE1MzdhYiIsCiAgIm5ldCI6ICJ0Y3AiLAogICJ0eXBlIjogIm5vbmUiLAogICJob3N0IjogIiIsCiAgInBhdGgiOiAiIiwKICAiYXV0aG9yaXR5IjogIiIsCiAgInRscyI6ICJ0bHMiLAogICJzbmkiOiAiIiwKICAiZnAiOiAiIgp9
vless://316fb831-0d8e-4f71-c2c6-816df7d679e4@wryy.yienergysmarthome.com:56428?type=ws&encryption=none&security=tls&path=%2Flzbj&fp=&alpn=h2%2Chttp%2F1.1#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E6%96%B02
vless://00c74640-d5f3-4b65-9db1-f07964049421@wryy.yienergysmarthome.com:23775?type=xhttp&encryption=none&security=reality&path=%2Fegyydlb&host=&mode=auto&sni=apple.com&pbk=wD9yFOig1TX7M8NS7YGn0e0FXi6Q1r99Dzr5h7hcNnw&pqv=j7n033w9lt8CJ7CEc5zGvG-w-G7B_5uY-XHBKJlCQVu36KKzbDUrsaC7h2IQQGeR0YwVxXufRl54kZqXHf8WOkeKMi7qfB0_BrF5L_PxdTRxME1mHnYPUgL4h8RazAmsSLq6eR5JD37eclFHeRMt0DDtvvWpsVw7Yte7YykF08THlIoJ7xN2lsKVB7bX8lSeuteaus9SNLn5-u8nrhNn9r4fq8CmMeuZJkGzlzquSJEsyUeOmD1c3AHcqizE5c8GyKGhlk1nT4QqQTKoRE9lGgf4DW7p_YvPJaVEtnatK-x1byFHcozn2BO04LTkEmdOBnJ-er2gyLKe5ui6IkwkzJC7S6XHUDW_VDl9LocpBhySejkJWC_DwE4azVhdt3EGAGAuTU0GpXSNab4FCaWwYqo2irKTbCy3VeRYvmZ1K4LL1ewJYGH21IUPen7PBlThS978kH73EmsE3SmUTORCLGQdsEZV3mP-x4cUUEbi57jjtW02oOMbMx4dIrHF_sylZhqf0zgePmqF4gUhdiVAg-4TE6HN-B_d98OBT83_uKGFWfiTnqoOFmsom47Sic0gWn25W_BYWbTF94DDWKAGVTT_BD7u1C8E-028O2Cv9YJeTtEtwzDPKD6ovd1HXPYGAr8tVokD1auwEt1cUBDLXhEJySM7fKhEfqembaXJLszQ3jiZMAm0RV_gKjLb6C2FZ3d95NXDWs-GmLQxSBjbkYRp_5NQzzugZbd7QtCDOx9b-nrUtF-dS9fRDZOWtkQ1L7dui7_DfycFwnwuOP6o4pKxtPCigMRtrfytcy5GmeNvKwShABYtVPiulLkyYdLnVFwqFjC-Qp1IuG5slxEt4rUuA5aJYpbLJTjDXjSEJsBys9aVIZulnf-P6t-bxh9LuLgwvpXehB-Q2kDyntrHkUVwo0pqjLqoki4vxrt7NLcAVlf2gifA-o_B5MvSq5gVNI9He9T2tlELrfT9HxuAbQn26SPwOUs6gTSL7M0o2Ay4PCuj03q9l6seg3rquAlqVqceet8wninv3WT3pByPlOmSQ3ZP1HGZYzQN9XdDwc_YP7eJhxUGKYzShuD-ieyJ9GJF7SdFuWPuElNCEMbptm3bzYyIZ_KtjCRdfwNnliX3MFCVyo7MtdwM6Yz25D0VEjtvy3Ph8mjkbMglYGeencGnP923qHX8mnYazWi4iu-5TxOad6ndMUkE1AXYUy-0VEUdH1VebpJyxZ5oVB4VaS0m_-dG3yExXLs9xIcLjA62sx8f206MpXx4G7pyFjRvhrLhR5QNCX_Zj-FylLralb2rRdrPOPlWBka05ioXJs9g3RJeZQ9u4AuMdma4noYl3sJXUAmY7tyrCOp3ujZ2s7hNuHN_pAmXyRmIfZIEis-5DbtdDaEco2mMvrB7Y5TMAD_YK3ph_ZcHWvFBV0k0Ia--AmyBKOVY9CTS_bCsjYQ5NxGcl1u2r3Tpyl_609-HfDdb8PSPzhQWXfo0jwrJy2acxla7fyWXKCUzKhGXEmRyTZuP1jW_Fjw4FTRiHaHs3ms01jB_DFMnzsj3ZwZD9QS2QBXp8kZjbdiwJoH8UUCc29bcZvl6DoUdRcFQI6Ny3qDT58w_0HVU0h-Vfy2dXp7sjm1Zsf14R_VqwKJuqcwcXR7_BFqUxwltBMdOfFgYeATXPdP3XqTNfUCny-jTIuK_R9zV6JFzxSpCcMXHeI0AZG969gDDjKOpr8qefh8qI5bJNYK_fSBdjXKQHo7jTqSlfPLIocOHztkD-Gi91UC9dPbOPNRkZqhCbUMnddzYqEagP765WO6jukbvQ17B5pC3OO8n6o5qxnYsikUyXEXeEkELMGOaZp9vN7QAjYgkDumK-mwjIucpuwWtQufmlM4FdM3tAYRTUOqYQ7WtWFIU_655iICMKQp-dq6RCEK4jHTp0_OceeJWYV00Zq0dTmf3bzzqIg35bPOU4_VSoStrB9LVi8DPqLqsEPifD2AixlCtzQdYmj8zdcySQ-RMkwqRB37g866-wStFBpnHz3hU4BS18-Od4R_7jmeKT3B_0vRpFIBshPtu7EWEcaHrjE2MSUAdKaowFumQIXJx5NnuVg6tghisKfBw8yix_1b4Z3BXpFbAJBliJZheixyv-0Nja8O6-tzwm8mgpmFeB4DDRC6RLKJAdzGaislt0YFdETmt_H9P-xlPfRfC6kofckS4Nl2_5PZuiNr92ZVvBxlhiYxfNZi3bhiu3ZyCriIYJjQIPNainGFxzCC4q3uB7b8XAtk9o-pN5-hYbTexUL9GFpv-KMYbTsexs43PA2FlMdWL-CT36A6xpHshOVSxrTJEnYbMf4xWYk2cVyT-9NYE1Ww2Z5OkPPLFFIf_dPTLG32lRCHLspVp-9AN47iYBkWdxxmcl8ciJM_EUWJ_8RnzZ-iLN1cjrYIPMvRv1dPEPhd_zuLmbyPy3UbhKB3H3y-IO1j3hef59Wls3lMfU8DGWpmvPHoWXmq54jck1DhNfFo7pHLZmPAjOfIOwEUvVg7N2973vzEUMNc1YG0V6dmR6ymWu0mFMqxnCcYSc2CEBEeuoJl3zVe01IA2MsGGhvHoB7s0dG8rM1WDglmE8ng&sid=6d3ea1a3&fp=chrome#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E6%96%B03
vless://9910641f-d846-4cb4-e1ae-3def255d08fe@wryy.yienergysmarthome.com:17495?type=ws&encryption=none&security=tls&path=%2Fwydzbhs&fp=&alpn=h2%2Chttp%2F1.1&flow=xtls-rprx-vision#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E6%96%B04
vless://c382fd86-e8a4-4025-883f-ff72e68da8ba@ygby.yienergysmarthome.com:52964?encryption=none&security=reality&sni=apple.com&fp=chrome&pbk=JlMK_oyvKuMsYdjjUpQd-bylnQgaYTyjw41XB51A_jQ&sid=c391e58b&pqv=ZdgZj-LAQbUkYnhiJolCKawTQ2X639Iq34MqgzruO7QWtCxysjyoDmv8vNIakACT1iBhXgiaFZXznrH-NGPjFW-oH46rv_IhTpiaOV93I1k8cje-_OojzkJwSPppGLu-FIWsW3GKUKsEp-nEEEY_TY_-CQLpzSPylJdIlpMSwjk410KHtIBtQBvRWIs-XILrAQlL832lgJF3TWR9mQ9_I7JFtyzzyEUB6kfNzjFcmOtDCy9JPWZf0rI-2pOpcyM2vfUGZu6nhDglzq9RTeBAa_wwUaESJJkEJYWmAwthxQtENzwW5uDLGUaRxCxV_f207OE-C0uZaFwBydnLYOO0NxXCTcMvIHq8eqQsvj_Y5AXfDHhR8zP2o9jkNyabakX166CUsFN6lZvJBE6BN3n6kkSznjwSk1_UQZsxT8nO-c0zscJBF-fxMqCevy4wxjC4JIgcfxfqdMo9_8Kd2hsSTCDcHVUxnVwcOTtymWVImk35revbVPQoaJ_vvGaW7_lxpnngCkk9Z48y7ddgPz3K9n2Vo5ygPTKbjZGKFs1EpKuEpBJFYcZu5wvxPzgtMKQUVjTP-d5XhW0T7QXwQreqbd5KH9fXlGdIUnxr2fWzrnE4F_fOuvUu50i2GzKU6HqddUxLwGr8OFS_hGeUZQSErlCetu6812LxcefEWDD6WxH81PbHhuSibvgRGtc5gBQyjvOwW_3kF31Kuy2dfTvDms0VMczZvwKqrezI6kvru1n6818YJXue54rz9JpmE1tuzc4cutRd_1VPEkmWq0agAzf6CmtXGHDRdndTGZ3eNbnire4mx5KQULAQCPfGmX540iPmAV_HpNoPqDtRMgXKEOU7GA2IU-yCBSg-LgpGc6g1SdhCB3i6YVDcSx1yoN979AURGJE7KRqs0pSnyV7Ri5aFY4IMK5BWhxQHXrsyyfKCpaSGr_bFB3SWIPSvHxImabG8LbZBvHyH8i0_IItKN_z509kk0T4V9K4_p3F6cd7-_9ETipwo-WQ6FEDzOYTnfUQkU1habrMvR9hr82ClhQl3hWA0uVW9A8wVbyQgjYtI0jCd8xZdRMlSy7Em5wmxoty4m86doU96VQ62XOvTAHU8ehNAuf2mpc0-D94OEkbSxvmbH1L3Z1dz6G6ZO1DB6wFbdcP92cZJfwHtn4sV4IN7byuXeJ_E6uZXn1KCiJ1zXLMSAi5Iu5jLmF9euhXjmNKjuABKcZCP_g2vNsMAQ_rf9NySx7G8-I10BUE4V3hXxWahS8LoyMmPOFmM7eI3V_-9Poc9BYl90Txu_52L8qetQEFI6jU4JycsjkN2yymATNdQh_RJeeGjwemu12nmgMKaG93jiKoCUGL__td5PZwqoA1RUrddrYRpi6DyE1bxEtBaihXHcXLkomQ__cno0AF80oVBDM1VQXoeAkP_RaKe-_8XqqQ8PIM0J6pguxBveDrZXQueclgH1u_4Df91vwue6u2xZyR-StqPh-oXuF3dRTb3ZzqIvoH4ZWnkmJ25_ZJhaQLjY8uyLcT_8UdUCpcc7Vtr4CHLa-5O-O2vlx-MSQ-v4J9cf3_HoZvjXoWifXvDrIXCRZHoPVpXc1Aq8ssw_66EoZwwzDWXSb3U25tWn-AQlDJg5y0s9p_zS3TfCWKSH4OFd1cJ0-sLgJ6F_PqNC3X93VtlHg0NCCA_sh3RyQfYMBCv3SJOqArpiiNC-IINASXX9nXGFdfGFQYHHvDetsLR7ztyIPowXu6hi8nkSZEwJBHazUCDhqAX6jGuXJ74noGeW_f6Tg0e_yllCHXVtFzV7T9P9H9RltwbEbs_aJy8zh9JY7W5ReSElQS2SxeAZs-x4C5nRde7fSuOFwpSJLtZAkk66DvpBLp7WmbMstwO7VVNRrRRV_Z7bygk_--cfxnsukxnCfeIkkZbRUXX7THMnlCm17aqmNgGFrvd727FNY5D7xcJWEE31EeDnr9QbSjp5il2Q8lAhRcURXwrgIAjMBnzVs5NdykQiNvOGlhykqf-OqAjoLteq5s5TxEmpE3MP17MAFM6o2QWFsmaf4ZkMlbKADtf9p_q7ER7WVd3ARjd8heVrvYXt0dNMO7HL_lcfv5bSuPUg5kXYxWA5N70RHimEUlZynzN3jxKDt5afU1-yt_lz1uMsaADNAR9o377NgGYwQMsh00v8BF-WqPli-QEbwMz6Bb6XRVnG60vRBL7SqqdLRLCod8NCWkyX2AVmz41wWSephcUMg-cgqw9pPQ_h4qPcSd9rMEI2yU32YotdR-RRoS1j0bEXuTnOk-wixtf_7tijGx70U77fbXWqZDxkOYUgCSgXNXuTqkSX_NRfC8e7pHBr8of1HKeCzVDCfDE0tST1Xx2GXYuwdG1CPWMjakoUOplfcBKIXTKC6bqpoa5LpP3ZUMcrC5t2JXZF4eiRBcGtwwzc4yVtiuhSiohkcBveGdnZV9TdH6aruARtlGvD92zPJ03Ujm8QM5DWs-FuHLbzrAzV4MCxRM1NurNZQS-D92spWnBa8eCckzCULF0bIqeTQhym0IIF3r2bPMHPPhPHaPmAu5vng2zCN6IQLsQ0kIdx-D8nEh8Kx-P50FOO7UqDE0&type=tcp&headerType=none#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E5%A4%87%E7%94%A801
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIuiLseWbvVx1RDgzQ1x1RERFQ1x1RDgzQ1x1RERFN+Wkh+eUqDAyIiwNCiAgImFkZCI6ICJ5Z2J5LnlpZW5lcmd5c21hcnRob21lLmNvbSIsDQogICJwb3J0IjogIjI3MzM4IiwNCiAgImlkIjogImFjN2I3Mjg1LTdmNDgtNDJhZC1jY2JjLTI1YWNlODA5NmVhYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2tienkiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiIsDQogICJpbnNlY3VyZSI6ICIwIg0KfQ==
trojan://Sm6dGlaDvX@ygby.yienergysmarthome.com:25218?security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2F#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E5%A4%87%E7%94%A803
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIue+juWbvVx1RDgzQ1x1RERGQVx1RDgzQ1x1RERGOOi/kOiQpTAxIiwNCiAgImFkZCI6ICJ0ay55aWVuZXJneXNtYXJ0aG9tZS5jb20iLA0KICAicG9ydCI6ICIyNjc0NiIsDQogICJpZCI6ICJhMGE4MWMzNi04ZjI2LTQxZDItOGRkNy04ZDJhNDc1NzRhNjMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi9jYnp5IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCINCn0=
vless://4670fde6-567e-4c11-c2e5-cf48e016b138@tk.yienergysmarthome.com:25118?encryption=mlkem768x25519plus.native.0rtt.2jyfGLbfpEZuPA8gSypEywv01kaYYRnl2KPHlpmh8Ro&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fhrzy#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A502
vless://143dd149-f64f-48bc-8408-88fc0f412ad5@tk.yienergysmarthome.com:48546?encryption=mlkem768x25519plus.native.0rtt.qeiAZH_RmyLKMGkZ0qaarYyGRujXkG5p56nBlYtZYho&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=iZKckUIhpg0p6ovFYvBLHkQcTA661gn_xwP1JhSvFk4&sid=93a2833f&pqv=k6wnPDsgtB7jGERo6fUBQ6mAfpqYqR-Ou5HxzkLfrUB9Ed1g7F6mM8jWzcn8if43qCDz_nok112ogZNyFvtVOosMf3AoKgnqC9xvAwnBvYlwEWgyHwWTOAsQrfoegkJNtdIuqWwCX-Qy2JwUmjHQMUegr26_Wp359v8B3JvH7qCjEpOJJ0EJP16Jhs9rJOkF_lEQpAsp8uRo2bUk0wyl6-1YJ6nQlqGgdas-nyms-2iZeUiS50RHI7-TDapSVHIE4D2fTX6KgwpY2BP_JLQlUJMvTTW6y1HXx5eHPLJ9IjmcyZr_OwklzNlgrMenn1zOZkyMPkzQ9obhYcQuE1bpXSGHiIvHF-_5cUYU0BmoI-B9lfyyuNlCc8q0kENH2esKE8PwrZEfTg5WxDrn1LP19fgv6UBjTxlXD_vuCYWBX3e2ud5lUW17oGX_T9cJ-DOku-o_ppn6Mw5qIYMaKbabHlWF7Ac91Mt6yKqaVLh9NGugywTYW8cFNj_QxU1BUj9nC-3qVKUzVJ-NB7-UPF1nGoj3kjXqlx41ajBDQR6U9nokgZOTMjadfGG-X7X-XxKSQoYH8YxH4kVd4eaiHJRtcJN74IBWjPvCMpu9KSZww3pJxOCRLvmJhKseXns4TfivfaqmZ-MqQK0qRaxrJxcY8E-yigKwcFT4oB8Weez4xXUPZe9ZkPlZzo45M83QXMZD4nf75kw71Clqtt88HN52909Az6GidyLPsb25XMiX4EdPajpWzKrZ2Hj_Ov95mOyWIgZ-0OB1DMLCXSammNhYasNrsZmhVEmTP934nxQt63THr6-oaI0b47CPlPL7-n71u2N9PmqmjsNctLsHIuqbwQrGFjpyuyrV3sFLC5FX9QV-wwZPYx07KgeG9GjNz1h8iyoyMEAu7tt6H-IywWqRWg3bEFt85PbagKDyacvKtAT_1VKTdqvSnGK4l9BkGsk3V7rOrRxQUmxXDAtLl-GXCwhvc-QbA53hivxsL7ONeGcLAf3JuOkctBBF_Ie0qLjTN4Yxa54FkyAi9Sw1PU5CsB33mQO2-wBdumnD5QKZiZj2pARQWH7OCgisncx48DMp9UqbcQ-O754KF1N61f3p9T1tt0gdN-Y0w3paAbwjGHnnQArmkJ8WkEhi4Sftvsx7pCkrVQi9HB8kAna9FDRLpLXp25RWQjDVBycV0Qeuh4CO4yFPC6CH7pcmeJGIvMJCwiz8DA0a9AR74uWXEleZ_BZrvxjTbdqJnZIJBpS9sNrJmc-FTcp_gwnk87Z1UgKJzvQEJVAcU1n4pmDClO4V562PoitpyEG65RNBBr2bcYqpAN3gsotiMJ91JXTfBznlDcgVaxK2VqMqhHUwFDV39QnHQsf7QUXo2qc-smXqgS1NddZDGmdqdIQIZZGP8XvGpRpOcdFW8YKjnZY4bw5KIRlXjPeuGumuRyI-Pj1Wyw2Eu34fnyOVzDr_m3UzIU_fG7YURoDs4wK7hrFvR4bAMALnOhHDLqyCYAn6fitoTTmKRDB-R9N_r7DXlr8ozACkBqewdFVDVgCOILKledO3ytsQRIZFNmZyoFv5f3hhL_zype2NZKWjpVOLPkoWdQxBx74-OPuKuY4QoCRzIv6ypesioYUehKCe5QyD7n9MyoUWiafnoGBgxw5hCkzzPDn_cWLhD49zf3xU4CABsFxVFRp9qb43EIxhQlbxzjha-E-Py_fD27d4VpiztbehWid5p9Wz8e5j5Gml283-N9dgt0RuQCANWOANRUSGGbk1oHrbDXqyYlJK8ZnwppGj4RDw-UasxLejDfX4dvhZMshozfWCjcMEtzP6MPkkk-Bgwtzuk1eOOMCG-WytIAOQDHEPhXySX6W4Um4jlqghmYJFsF6iPwc3rY5RBQNAAL6hqi81eips89S-YkDJpdlQhaV63xLYJzgw_Jndrg--MUEe1SzKIuTbfkewvtT42UHmPPGiq5VgLtQCrG6W682Xhv-Ujs6uoSTUap8jl1Ia8ffS2hwVu1Q4pr4WRvqjLrAj41e_LsCJVb47Xb_N0pioxh2gK_yWWbxngD-SOBBkIb8pkGpok0CDI0PC_UMdnrhhVpPCLNnW2xP02H3buSDym25544T3Z6Mh-XeOYv2Gkaqo2Z6qRaoG2-gdN0rPBdAO90fm3hhzD6Mzvk5s-eOnrlHOlE0u4DdlHRMtiQJyyCw_Bk_zK5_J5iO_aUbZCsSdxvjg_7nyzVOxxE3PphFZfFYDsPPtEYgXkqs61zqtrpumtyejzRjXBOtaJ6TRw4CHt1qSYoEHTatfVROTuOIbqvjCqt4-me7Lejkn7_YpDkdSa29Vvn9F0d2sENamFP6gZLl8xZKZxwcnX55tsu_fkvq8wHrNtZLj07Lp66wo0qfiEFWLZXgcuAD7-neiAtGHpiTv2EEEkfI5N-rbiZZb2l84x-vd4PvsZDFL5NNivKk5tXhKyiUPeD4xV9l7YUQHLkElTtKdWF8yD0aj5_UB-F9pdEkAt06yjnrPWn0FO4aTIYDmnOZngyS4c8-eV_tvUnlXl18QIcvPIGyoDsf4jW6agRmkULUECBHUgvBHmfn2gYpI-w0rJQo7ZlDsckhpbmY&type=tcp&headerType=none#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A503
vless://79568426-09eb-4c64-f746-aaae9e132419@tk.yienergysmarthome.com:57963?encryption=mlkem768x25519plus.native.0rtt.0ldLlAQVXzqg05KUZiaKgnACXGo5C-tRhGqQUhmWdqgduSRYbdDBaEPB7EwclwumsJOuRdIZEDVp1mJHE2Ne4eYQFbQOMGelILadrLYjqCicGiHMiCDNpWCcMgsL7ZNotjUzq8EE1NCVGsx_2hZjs7pdPKEf0KR4-ENqlBsusvSAHJiw4Uw9WkW35ZxVHpUwKkK4edFwrgsMbQZUaeNyNLkPJGTPW4C2svp_TiuA3-Wv77VhLJkM9kkOE2RdmaWxhoKor4cd9xBuARKFrXIzg6skDfKRYcoFdJiZeYOfFWuvFFXLuSQ-QSlhQUl1tlx38Mc7SjZf6YFWdAoOK1u8DkhydkGsj3mPaZipXKwqV2p9XFNil0IgkLEwRymWsaKZeyxvAxeThKAqfiU6wceK3RKQ_qOPQDiCU-Z-S5QE1wIhLeFcsZIcxKAPzgLJC4MspZMl8UXALhGBo3YKMONPA7h-FQsYAMWeiBlZbFo0j8SBW4teB2yDAGiwM_S-h6EpyWQIPCkL-0vHf1p1QUK8E4BS2lCLcKezhyOHrAo_9vedsBAcc7lmyeUxavRtsPAuHSADwuOjMvFEOva0m9N2LVqQ_WhiZCFw5xMgEwk5S3i1N2LBjoocS2I1jEO6yzA4opkpUQMCxDNMgny538s9i-pLCQjG5NQX8eO3YKF8wjVScJdo58ezCfl2bZm82Qc-AkMLTAOXMNMQ4fttKhGhtUlzmrw8QHNUqpyGSxOHjedDs7mWFjun81go1lwv9PrJwqtHcbRZGVRqTguUonVJtLOGdbGF1kJ6srVlYkN6gKdddFKob1wRmxlUp2qpW0YmQMk5rLwsnHMNMsyPpKiUb0mjsgF5nuEKWMFA9OMYhHUu_rhPm_AT8vK7HghRcfsPhNXGKsAeyae9O2GzFfICBvizV4i4MPGtwrV9thxHuuGI17uo9ZzCT2vN50rNCWmnxzOZelsLKvmOKpQOQUIMb-ufB-sXadM6AN1On9QmPlTLo8GnLkks1HdVKfRCSoSl-OMUuOjL5-oL2cYgXPs-PQeGCLWZzrsn6qQk55o78vYf8yshUDuiOczLEUQFNpxfAUtry7rG9QgP9UwzqmlfrkavOhNuapcBUwKFa-gay5eHksic8QmKZkyfrWEAY7d8K7OcpyAb-iWTkgSFehlhIpC36jxmUcoE5gUcLzRNx7h9Z6sFvPrKT0S3dvc0-_YlaiUj0kyyb5ww-fBK5Xx8vpGaDVo-WBRtrtezHiNTKrB87dUQ70gqqzHLCgiYGsJ-GTSSp2UjEVetdThe22QlvOxpHQENCnypEnCwWPsgWIdl0UyYeoYCnwtDg0KygIQ0eOFjjCEbfAJsbcgsKCSDH8lHmAIS4aRJCoS7-DiHRCUVS2q0O8FAt4smJRivDbll8EaXnnpLAJFF0FOCXycbKjNO1XQwsNTJ3nPAIXIEPoB1dgd1ZJgDl6TBWmdibuFNBhtpigPHgek03UNUHaxj9Yuq3Ka52Th2-gNypnVKKmZW8AqCKjrG3ZuUnOvICitN4zfkvxZb3wKTd_mptowAlO-AJi_paFmdJ-vlGT0N5BA&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fyzydbdd#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A504



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
