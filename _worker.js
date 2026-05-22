
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'rogerrllgzyycguanf%1*2&30';
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
hysteria2://834d18c4-4e3a-42d3-b8fd-12b3084981f3@149.28.79.12:24338?sni=www.bing.com&alpn=h3&insecure=1&allowInsecure=1#Emial%20Hy2%EF%BC%88%E7%BE%8E%E5%9B%BD%E9%95%BF%E6%9C%9F%E5%A4%87%E7%94%A8%EF%BC%89
vless://97177041-5799-4f8d-ea3f-7de2b46c54bf@em.yienergysmarthome.com:38368?encryption=none&security=reality&sni=www.yahoo.com&fp=chrome&pbk=6uetYi2xNsHEFwg9WshQ4aNlz6Ji_lCWsj0Soj53CBc&sid=5b2ad37b&type=tcp&headerType=none#Email-Re%EF%BC%88%E7%BE%8E%E5%9B%BD%E9%95%BF%E6%9C%9F%E5%A4%87%E7%94%A8%EF%BC%89
vless://8fcb3cf1-4f6e-4f1c-a49c-e11dbbb09cf4@em.yienergysmarthome.com:22123?encryption=none&security=reality&sni=www.yahoo.com&fp=chrome&pbk=TyOsbijeQDuUmD1zBHb-i5rX515UwFbJFO_K8iaPHwU&sid=264a9c05&type=xhttp&host=em.yienergysmarthome.com&path=%2F&mode=auto#Email-Xhttp%EF%BC%88%E7%BE%8E%E5%9B%BD%E9%95%BF%E6%9C%9F%E5%A4%87%E7%94%A8%EF%BC%89
vless://29b83c06-8732-440d-cde9-8a3b8b6c4214@tk.yienergysmarthome.com:32419?encryption=none&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=oXWZ51PkuveBUBEmpVAmLDNfDhm8qy-Kie54NQnJ81s&sid=f054d9a5&pqv=FRExZkXHFGsShO6uxDBz8GKM_RtIVO5j7TfXkom2oIoac8mnqyWpNIQJn_EYsbtLI3YV_bLzM8Br7Bh2NvpHgUMsqLUU8pde4vDPB4KkbHaFbYj6MEVhNnYqqITqbsvnO0W8GFdP8lEE-CndrdOWXPqp2Qsug4qltbNddmnktAydgH_GhtcGgUYQVcCswIZ8nMeNorxXtRFhLqBsP2VmJiqP0qgC5HgMHTwM7nXRvTeCEUds0Dm2aNOvhzBD7m-HwSkJxx4NvpnFGUQedUh_507EmRKw76IVqnX9rMEkXlSsTJ192khRl2uRzjqDXrEyP7_9lTudeIHeld3Tpg4AWCpHX70eDy_VaMX4lrf_PJbFtgmVzpwxpMZQW3rS8iKLXa3gnMBZtgDGghB9lqNkKN8GLY83Fy1utMzHxMxL6Eyc5k-9a7GudE3CjiriS_mb4r3mA3ouQhceiXR3rBXb6qGkO3vvWXX48ZPhICJWLz4iII2Be91twr_BfY0e41IblvsIF475W-LHLy22WmC9qcY1ebW-Z_Ya4tp-g_GemHoF_UbqVe6AmkYMmh_ifMBKMVz6nmfuLFrqukZ3oUwM06_25LlBrgjyy9KUINvV3SiZE2OpNIHCfUPQNYCyUlmwthLTiwYzShM-ogU6MFWiYzgxlJEeB7v6WbO1lQXMkojWhxPXTdy2noEQLsY0t77_jIceglLANi1e_knRSyz6jh2WIGX3R-DAYYeAZabZWHRyee25MFLqCVjsbvm33BCk344Rp6hvaTzrAdwqtW7FN6kRBCXAhzfQXYCPSJ4gr768JevNDhqY2vB8bq6TliyF5tNYSWtrZ5q6Fd_ojzFvJAGc7DG86A7V30oPzJG3TblO1sPKp6HL5BnZZAH1L1gYBv2GPGX9zoJXHCFBZ28qUWVnr2FucFFfXw0yo7qCUBSAMcq4dxi5siCIhOBrt7_8rE9SFGXJEKk_XIEObnw1UtZ_fccTghS71bam9Vf8rapPTwqena-9ND6PUcFmEZdYtA7kZYK9MKryR2p6wivRuLhaqCEI6xqCdudIvlSRIS_PZ6l-nLfJOUkY4dvFxmEc4-R06X_PdUeInlKIeA8ns7JQSZThMU8EO7XaDG6LQNl0IopiZPVSch7gZoOq6rZ-Wy3_hNfhkUADGxcZsJer84TaggzrsK7vgL4NGSWB-leQ5KNSe1m1MthFRwzEmiwF0fzE_TosfZf4stnB6YFQHDrv4z9qzNxWvSg-K9i1TTeJHJc07ljms_WBAY1gqs4voEKfnL47O5jSTOJ22Hb02BI_DzhWUDnhLR4EzqFE1K15C2sktmIq3Lsxp0vcUD3sVj_T2_0oG5fUJPRsW57RsSslBKC7k2qfbuQ18fooAKmGPCv7ybdVYLWTYyx5rIQg_0NDmRrVzUYJ0XpD5XDsb8rkhmGzb7mks2a5skbLPAO9m1ZnXv_IIjIMArliM7aIn5X3IOsMKlIZF6yl2WEQfWNflSWUbYYYQbs637OJqlNyjZTDqHgio-JfOy4jIYnXCxPimVrBd3VNmSoOAXhIsyzXCFQ_M6msZrNfJHj2wSTZbjXj1q38HJ8M9IXhB0OZaj_dG7pEPHYgykBLTcbgLCADOMVpphIageCN7AeKCdL755bcuyIafxPK7AXscfnVputhEmtABSIGodKq_MOGDhRlsVVx1ixCAYhuHIfvE2rf5U7wn6Pva01wDg5nT_N1oT68nfHgQyrwzpDyOtXUSYpCsQHoho0sC-Oj35rqvLos4gztaKaPBsxqGTw8tJcOwbEWffRN6GGNESTdhtpHXcxJc_BR3ETSXJNWuQiU2nv6aMG1GXVY2BhnFsZaeAGFCChgK2US5W2oZDUEG1JM5xODpj4bq2oqx5OHPfDLxk-fuydIYotCLsPA6CyoezrLzyBJf9yiSGPkQ1Wp70XDxO5qZNrrZhEMvqU0XlZv6aHRDEg5O83L65n0rhfiKTNAce1Eb2hCSQcHhyMO3wpofw3iMCNbSv5gIMPrd-EYVI17WpenyCYkLL6XCGjbfapIuxrOy0Gm_mn-FUEPSZbCypxQN6j9EKj5I9rLOs5ISjqJ9Te0T0GlO65Ls_j8BvF4pIpHcEecJbm0TnHm9PpwWzd42NiSkuPw2Mu3yX6ShpVmPpkL83ecscwkPxWi5AwWyt_84rYKAJDx_PKqRAzxvBZfIJa4D5TmxTwWSLTimT9o4Yml6HEPC4-KuIn-bDAxqD79YobndI1TwTloyc0xwhApGFKWatKj4v_0LJifWigAKh_L3gqzoE8-zJKX-nFLx-7_KwAmyn0c8YPUzX7D_uj13OFOXacGx2Oflt3wjSOZlBCcfkXM93SY02LojZxNfPEkpiHcXeq9nIOVGZ8-g2se_Qn2GAe5g59M9Sc9NkYkSBkSC8XFCkWJyNgqakwKvKEdcZQtVJqibsMatp1E2qiWFCwiDwmxkJ64vE8jekIFx2IYyMvN6H2E8_4_KJlT-sfcriVqDJH3ZUN-At8kdnamYRqg70Dt_nc-oNMTDJNLCAO2-ip_4rrFnfRfoTfzxc7Cq9tI6CdVAl0Q1FrqjAAtKaxSpoN8I2xt1Kh24AE&type=tcp&headerType=none#US%E7%BE%8E%E5%9B%BD%E8%BF%90%E8%90%A5%E6%96%B0R
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVT576O5Zu96L+Q6JCl5pawTSIsDQogICJhZGQiOiAidGsueWllbmVyZ3lzbWFydGhvbWUuY29tIiwNCiAgInBvcnQiOiAiNTAwMDciLA0KICAiaWQiOiAiNjgwMzg5NDYtOGU0My00NWVlLWJlZDctMWIwMzJkODMxNDcxIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvZGpiY3p5IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCINCn0=
vless://4be21db0-ab73-4bcb-d3cb-c383ee6ff06a@tk.yienergysmarthome.com:14135?encryption=none&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fmkbyyz#US%E7%BE%8E%E5%9B%BD%E8%BF%90%E8%90%A5%E6%96%B0V
trojan://mknIK82fH3@tk.yienergysmarthome.com:43300?security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=xhttp&path=%2F&mode=auto#US%E7%BE%8E%E5%9B%BD%E8%BF%90%E8%90%A5%E6%96%B0T
vless://d9b953f3-a198-4ad6-981e-2eb50f3988d0@tk.yienergysmarthome.com:44945?encryption=none&security=reality&sni=apple.com&fp=chrome&pbk=Dl7tLcyAXikYyuQOngr9ApV9APCHLys_T-VWyvrXIQ0&sid=a04684b4&pqv=nMUCYfysS0-GwpeBAaM9Mwk33WiqLbe-Y9r6ggtw_rGJ_XkOPGfNSDy7_ae23jZLDIEH1ceJnVaGJU_FEQELGvBpJUiBz5omqnYj7CBDYo84xZlr3RoVdbLhZ6Avj_iEEUlwsf7sjWsE-NS80sUWgeAS0KbySlLweTGCPjyepb1Gf854JjZYNtrQu2qi8MhsKmj2C9clclQC1KRS_mB-qImyg4atuXuKGDF7JS2ZVuVQ4VJ5p2NVSo64laNWsfVF5l0jeH1q-hXLqtvtQ0pcx5lX2dD-8hHVfg0tHebZWFBtE39Swql0qu8PEOZFL6_in4WtZrol5mDsxJkJ0Ze8JKzeNcuIO_wCFiiWZSCp__JpqjFBnxPkkwti4kYgBmdrbQhWm2NJYHvPn4cvBlsR2e9bl5kocf6FypYNMuy8jrw6A5UqqH3B2TODeaL5W3D2J-_Kob6S3QvO97rIcLNmosiHvkhyuN-5ZsJs4Ayowb0YIksPUAfyXVY-56ETcnUYXDklv9jiXxL2p237ITucDF62wu0EEh90FsJWhM2Lo6nLl_wzctz6cG7JlvtgagK5mUi7lY2jVanLldE_LO4_qI-hJ4iDYDy8zSg5JUZvZ8cYhgSByEiJkJumId65w4aoqzJDB4GK3bIGLkRdnUyFComU8O7WI9kIcwgtIxf2JE9jS3w4NykfgprjYT4O8QxIBYl-YLJoDlimWb3jDHH21_IFqm1lX3vD1nYZAMb3K1R5KEe7-iX4lIhXZJSWkNB7QxamNAD4XbFqGSKDFxpjKtmjYQ6W1c4PDo6rJGXxQWGYvpLcToH_zvwymWlb-dvqFRCXpGXv8hhKKll6CC_0u_xVKd_KZMMzgML8mi1bKw72elunbfl10ApJCrFsiCTdDlLdF4KDddpO_ikZMe8b_1Ymjjs29tBihp3WEw7eGGoiT3RkHjWHlCQ55o2pjJ87C9yatD1vITD1ThWDbX0Mhsi_kmHybvbdrjqOUN6VG-yuDqRJW3Tps4URm_bmb5f2hPv3fmjlZCfSL-iKKTO2_SvMNtqsNOefkvdkIVFsPbnPQccCTxmDV3OoEwFFvANzaUG00y-R2o6PwpZAaQuu4q4WtMWJLJ8hg6Hw2Ilm_9tyo_crc_eI8mMlxOknnTfS5z2H_1UkQr276uxsWLS2K2D5uCUUWn09gfd5NFPSaJ37ftGt2GeRQ-OKO0r95bKm7Vtx0hU-lzzmnQbEdFgzLeLz5Z1b3YJAj-iuZ1xwiMf078mYYWwe4eXpypT0UVwmaKEs18ko9qA9r2lJ9TJhCHLwJKKd71d8BZUbsCJl1c9VV7fOTWApeJu6_3jZmEs-v-u9ksfveKzt7XZwz7wQbjQwQwQsu4PKCAq3z1WbDDWd7iJvv38G9IgYYqowReMQQBUrqsbIyhanIiG_DvAd54rWiIylOuupQjhTrTvXMOnrq3j-RBkKNxNyNeQ1XLE9q-QTa4GjLrQnGOqJ6jcpxZhn7GSLUtN4nhG90seeJV9p2JP2PKInd_ajOnvOORE6bft8Dddn8vE-022qSKHLYm3rIg7HMGwDeHvq_EshpJjZ14R1pRexFmEH7VxyOy3xer1joD0Z6e9ddcLjPoRkrQIzyXPqw4nmfucLGAjdrZQpsIy7bK1aicE_PyIENCp4Ix04DU-WO44nhR3EJ42Kpjh8SkTqjLLUJqHnpftbQTPCiQO8xAejnceDCXvoVNFOrl53gBSNyqT-qw91vnwBNNsiS_nyX6ZIeF9Z_FQczPPHD1RFFgO8VcGjTYC-dfvzB6V4QWki42sx3ao9hCNK2S92eG-jSEhLcgOR3Yg_ykeT_GADaDfp2sUm5MHRm5dtXT1rLamCxVamsiqrCYeerwyThTp132gww7Y9oVSBbn0A5_3xDkRaQVXFcioKw8gcHwtkSjV9_W8DYBL5qWUzsH9JBtljsb36qehXaeV2EKvrfR_gidy3K7TvpNBkAZBCuVmfCWVQPSWS7AxcsnOK9d_BFVtajOcEB9xI1jV-CMlwVBSk2S3GEKtE-CwvGafluBK1QXD4boFRwyR0-obhnP3A5f1fle2U0GvpgGWoIqx5UOE2Iw7gFhtasX7rx2gHX-cSLHkgJo76AH3gBmGHnXVUDLvO9FyKnH43IvZrLYdYZecUCx6FPIPR70gazyYPWqWq6X5B-BELqkALJtekObXQSH5iD_isIaapgECn5NtFEGkS4hoNMfM95uTP1TQO6pPM_VlfrfAlJxo4YNKJMb-_097gMwIZRUtVecnNfFhp9NLs0hZfqEqGq3eX1i883KyDI9I4CE4Z5lyAA50_WCBxVdK9eCtFyGkLvy35zWrXdshDgzOzTxkbVvNF9pllncsEhi6ikLrGPPwCMoJOC18gD4WNOrN8a8DJUIUCWG_RawbLjBQQB7I4RpoBjl-OsoHvWfbaZy92QaP7YS7q-8nXGmEelzOH7T0o4mezx9KPmXHu2YXAzHFPJYUNFDO6lwDEqGuc-x-Ius-8_gwwc4LyMRHk9j2SgWQc2i9NOJa9Urq7Lvi-vZGxgKjd_tdjzVwU6c-O4pf8W5eBKSV91dnBaZioABHo7jSK88ylzdg&type=tcp&headerType=none#US%E7%BE%8E%E5%9B%BD%E8%BF%90%E8%90%A5%E6%96%B0E


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
