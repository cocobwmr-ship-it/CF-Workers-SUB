// CF-Workers-SUB 升级兼容版 | 适配 Mihomo/新版Sing-box | 修复psub旧版兼容问题
// 仓库原项目：https://github.com/cmliu/CF-Workers-SUB
// 升级点：sing-box v1.8+、Mihomo完整适配、subConverter兼容修复、编码/并发/KV容错优化
let mytoken = 'ljf&rogerIPOOLGO';
let guestToken = '';
let BotToken = '';
let ChatID = '';
let TG = 0;
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6;
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31
let MainData = `
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIue+juWbvVx1RDgzQ1x1RERGQVx1RDgzQ1x1RERGOOi/kOiQpTAxIiwNCiAgImFkZCI6ICJ0ay55aWVuZXJneXNtYXJ0aG9tZS5jb20iLA0KICAicG9ydCI6ICIyNjc0NiIsDQogICJpZCI6ICJhMGE4MWMzNi04ZjI2LTQxZDItOGRkNy04ZDJhNDc1NzRhNjMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi9jYnp5IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCINCn0=
vless://4670fde6-567e-4c11-c2e5-cf48e016b138@tk.yienergysmarthome.com:25118?encryption=mlkem768x25519plus.native.0rtt.2jyfGLbfpEZuPA8gSypEywv01kaYYRnl2KPHlpmh8Ro&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fhrzy#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A502
vless://143dd149-f64f-48bc-8408-88fc0f412ad5@tk.yienergysmarthome.com:48546?encryption=mlkem768x25519plus.native.0rtt.qeiAZH_RmyLKMGkZ0qaarYyGRujXkG5p56nBlYtZYho&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=iZKckUIhpg0p6ovFYvBLHkQcTA661gn_xwP1JhSvFk4&sid=93a2833f&pqv=k6wnPDsgtB7jGERo6fUBQ6mAfpqYqR-Ou5HxzkLfrUB9Ed1g7F6mM8jWzcn8if43qCDz_nok112ogZNyFvtVOosMf3AoKgnqC9xvAwnBvYlwEWgyHwWTOAsQrfoegkJNtdIuqWwCX-Qy2JwUmjHQMUegr26_Wp359v8B3JvH7qCjEpOJJ0EJP16Jhs9rJOkF_lEQpAsp8uRo2bUk0wyl6-1YJ6nQlqGgdas-nyms-2iZeUiS50RHI7-TDapSVHIE4D2fTX6KgwpY2BP_JLQlUJMvTTW6y1HXx5eHPLJ9IjmcyZr_OwklzNlgrMenn1zOZkyMPkzQ9obhYcQuE1bpXSGHiIvHF-_5cUYU0BmoI-B9lfyyuNlCc8q0kENH2esKE8PwrZEfTg5WxDrn1LP19fgv6UBjTxlXD_vuCYWBX3e2ud5lUW17oGX_T9cJ-DOku-o_ppn6Mw5qIYMaKbabHlWF7Ac91Mt6yKqaVLh9NGugywTYW8cFNj_QxU1BUj9nC-3qVKUzVJ-NB7-UPF1nGoj3kjXqlx41ajBDQR6U9nokgZOTMjadfGG-X7X-XxKSQoYH8YxH4kVd4eaiHJRtcJN74IBWjPvCMpu9KSZww3pJxOCRLvmJhKseXns4TfivfaqmZ-MqQK0qRaxrJxcY8E-yigKwcFT4oB8Weez4xXUPZe9ZkPlZzo45M83QXMZD4nf75kw71Clqtt88HN52909Az6GidyLPsb25XMiX4EdPajpWzKrZ2Hj_Ov95mOyWIgZ-0OB1DMLCXSammNhYasNrsZmhVEmTP934nxQt63THr6-oaI0b47CPlPL7-n71u2N9PmqmjsNctLsHIuqbwQrGFjpyuyrV3sFLC5FX9QV-wwZPYx07KgeG9GjNz1h8iyoyMEAu7tt6H-IywWqRWg3bEFt85PbagKDyacvKtAT_1VKTdqvSnGK4l9BkGsk3V7rOrRxQUmxXDAtLl-GXCwhvc-QbA53hivxsL7ONeGcLAf3JuOkctBBF_Ie0qLjTN4Yxa54FkyAi9Sw1PU5CsB33mQO2-wBdumnD5QKZiZj2pARQWH7OCgisncx48DMp9UqbcQ-O754KF1N61f3p9T1tt0gdN-Y0w3paAbwjGHnnQArmkJ8WkEhi4Sftvsx7pCkrVQi9HB8kAna9FDRLpLXp25RWQjDVBycV0Qeuh4CO4yFPC6CH7pcmeJGIvMJCwiz8DA0a9AR74uWXEleZ_BZrvxjTbdqJnZIJBpS9sNrJmc-FTcp_gwnk87Z1UgKJzvQEJVAcU1n4pmDClO4V562PoitpyEG65RNBBr2bcYqpAN3gsotiMJ91JXTfBznlDcgVaxK2VqMqhHUwFDV39QnHQsf7QUXo2qc-smXqgS1NddZDGmdqdIQIZZGP8XvGpRpOcdFW8YKjnZY4bw5KIRlXjPeuGumuRyI-Pj1Wyw2Eu34fnyOVzDr_m3UzIU_fG7YURoDs4wK7hrFvR4bAMALnOhHDLqyCYAn6fitoTTmKRDB-R9N_r7DXlr8ozACkBqewdFVDVgCOILKledO3ytsQRIZFNmZyoFv5f3hhL_zype2NZKWjpVOLPkoWdQxBx74-OPuKuY4QoCRzIv6ypesioYUehKCe5QyD7n9MyoUWiafnoGBgxw5hCkzzPDn_cWLhD49zf3xU4CABsFxVFRp9qb43EIxhQlbxzjha-E-Py_fD27d4VpiztbehWid5p9Wz8e5j5Gml283-N9dgt0RuQCANWOANRUSGGbk1oHrbDXqyYlJK8ZnwppGj4RDw-UasxLejDfX4dvhZMshozfWCjcMEtzP6MPkkk-Bgwtzuk1eOOMCG-WytIAOQDHEPhXySX6W4Um4jlqghmYJFsF6iPwc3rY5RBQNAAL6hqi81eips89S-YkDJpdlQhaV63xLYJzgw_Jndrg--MUEe1SzKIuTbfkewvtT42UHmPPGiq5VgLtQCrG6W682Xhv-Ujs6uoSTUap8jl1Ia8ffS2hwVu1Q4pr4WRvqjLrAj41e_LsCJVb47Xb_N0pioxh2gK_yWWbxngD-SOBBkIb8pkGpok0CDI0PC_UMdnrhhVpPCLNnW2xP02H3buSDym25544T3Z6Mh-XeOYv2Gkaqo2Z6qRaoG2-gdN0rPBdAO90fm3hhzD6Mzvk5s-eOnrlHOlE0u4DdlHRMtiQJyyCw_Bk_zK5_J5iO_aUbZCsSdxvjg_7nyzVOxxE3PphFZfFYDsPPtEYgXkqs61zqtrpumtyejzRjXBOtaJ6TRw4CHt1qSYoEHTatfVROTuOIbqvjCqt4-me7Lejkn7_YpDkdSa29Vvn9F0d2sENamFP6gZLl8xZKZxwcnX55tsu_fkvq8wHrNtZLj07Lp66wo0qfiEFWLZXgcuAD7-neiAtGHpiTv2EEEkfI5N-rbiZZb2l84x-vd4PvsZDFL5NNivKk5tXhKyiUPeD4xV9l7YUQHLkElTtKdWF8yD0aj5_UB-F9pdEkAt06yjnrPWn0FO4aTIYDmnOZngyS4c8-eV_tvUnlXl18QIcvPIGyoDsf4jW6agRmkULUECBHUgvBHmfn2gYpI-w0rJQo7ZlDsckhpbmY&type=tcp&headerType=none#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A503
vless://79568426-09eb-4c64-f746-aaae9e132419@tk.yienergysmarthome.com:57963?encryption=mlkem768x25519plus.native.0rtt.0ldLlAQVXzqg05KUZiaKgnACXGo5C-tRhGqQUhmWdqgduSRYbdDBaEPB7EwclwumsJOuRdIZEDVp1mJHE2Ne4eYQFbQOMGelILadrLYjqCicGiHMiCDNpWCcMgsL7ZNotjUzq8EE1NCVGsx_2hZjs7pdPKEf0KR4-ENqlBsusvSAHJiw4Uw9WkW35ZxVHpUwKkK4edFwrgsMbQZUaeNyNLkPJGTPW4C2svp_TiuA3-Wv77VhLJkM9kkOE2RdmaWxhoKor4cd9xBuARKFrXIzg6skDfKRYcoFdJiZeYOfFWuvFFXLuSQ-QSlhQUl1tlx38Mc7SjZf6YFWdAoOK1u8DkhydkGsj3mPaZipXKwqV2p9XFNil0IgkLEwRymWsaKZeyxvAxeThKAqfiU6wceK3RKQ_qOPQDiCU-Z-S5QE1wIhLeFcsZIcxKAPzgLJC4MspZMl8UXALhGBo3YKMONPA7h-FQsYAMWeiBlZbFo0j8SBW4teB2yDAGiwM_S-h6EpyWQIPCkL-0vHf1p1QUK8E4BS2lCLcKezhyOHrAo_9vedsBAcc7lmyeUxavRtsPAuHSADwuOjMvFEOva0m9N2LVqQ_WhiZCFw5xMgEwk5S3i1N2LBjoocS2I1jEO6yzA4opkpUQMCxDNMgny538s9i-pLCQjG5NQX8eO3YKF8wjVScJdo58ezCfl2bZm82Qc-AkMLTAOXMNMQ4fttKhGhtUlzmrw8QHNUqpyGSxOHjedDs7mWFjun81go1lwv9PrJwqtHcbRZGVRqTguUonVJtLOGdbGF1kJ6srVlYkN6gKdddFKob1wRmxlUp2qpW0YmQMk5rLwsnHMNMsyPpKiUb0mjsgF5nuEKWMFA9OMYhHUu_rhPm_AT8vK7HghRcfsPhNXGKsAeyae9O2GzFfICBvizV4i4MPGtwrV9thxHuuGI17uo9ZzCT2vN50rNCWmnxzOZelsLKvmOKpQOQUIMb-ufB-sXadM6AN1On9QmPlTLo8GnLkks1HdVKfRCSoSl-OMUuOjL5-oL2cYgXPs-PQeGCLWZzrsn6qQk55o78vYf8yshUDuiOczLEUQFNpxfAUtry7rG9QgP9UwzqmlfrkavOhNuapcBUwKFa-gay5eHksic8QmKZkyfrWEAY7d8K7OcpyAb-iWTkgSFehlhIpC36jxmUcoE5gUcLzRNx7h9Z6sFvPrKT0S3dvc0-_YlaiUj0kyyb5ww-fBK5Xx8vpGaDVo-WBRtrtezHiNTKrB87dUQ70gqqzHLCgiYGsJ-GTSSp2UjEVetdThe22QlvOxpHQENCnypEnCwWPsgWIdl0UyYeoYCnwtDg0KygIQ0eOFjjCEbfAJsbcgsKCSDH8lHmAIS4aRJCoS7-DiHRCUVS2q0O8FAt4smJRivDbll8EaXnnpLAJFF0FOCXycbKjNO1XQwsNTJ3nPAIXIEPoB1dgd1ZJgDl6TBWmdibuFNBhtpigPHgek03UNUHaxj9Yuq3Ka52Th2-gNypnVKKmZW8AqCKjrG3ZuUnOvICitN4zfkvxZb3wKTd_mptowAlO-AJi_paFmdJ-vlGT0N5BA&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fyzydbdd#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E8%BF%90%E8%90%A504
vless://71a1cfe1-b6b4-4f3f-8f6f-30365fb59803@ucn2.yienergysmarthome.com:43057?encryption=mlkem768x25519plus.native.0rtt.mXYtORxQoUhWi9iMSzZ55kbbVDY49Fy2UFxpOGY6_QY&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fhxhxyzy#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B001
vless://83c6cdd5-0d19-4e9b-9a74-c6abd6df966e@ucn2.yienergysmarthome.com:10322?encryption=mlkem768x25519plus.native.0rtt._SlYFpRK5kE63mjcyleukqvQnsEDoKTZWadtfEKI0ys&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=LA2d3LpQ6514zPzbGTxie9tlkrTvnOorJEIVPolVdnI&sid=17e184db&pqv=Fz6QfZkPvwCv4Pb2mIWZ3kdIRWtjwwwBnE1p7gEV_OnAHn5GJxTwEfC5WdaBJKPFCcmI9D5e1pluaZtq5nt-2YNa20CN33E7P-Vu0ddslQ6RdK78Fqo67t3mRaX3IhTVeyZmny3I5z6k4vKYV7gLSTFIsHSiks-844tbC0zfelZ4_e1vIvK1gkhRPkEJK94k_JdBzIRnEKEG45dsN9ShBufMxW_12R-LlBNJx5H4TEBLwLAgd59seGrrwAjBb0VNAjNUe3m-PW3FNiAaYfIohRZ9WIQvZ0BTqqyVCtgbcSvdRz30dCwtZfBQOHxsvtUu-3tN6jxWCBJNYaLRWarI2N_x7DmdaLD6TBMpMflNmX4QvgSABRwXDlHoh2yQYjr1-pDjy2x3IUB7m7t8JfPj2I1xhhue0kU8-3whbM9w7_41Ifjqi4_VbUYcAP1o9kSuCqIuNr6-ZHYXqKVFEjEj0BsV4OmWAcGVk6JFfIQk4jQTKrDeknQGIbGH3HO8Wrpo3Ha6KJV604M9vqWvImE42KIRVP2hU27WhH5y2w71zcxyDuTiwuW-1NWbYszUbdIO8FzzzNWkr2evI8k72cfCzUy_nl8MzJuSkOZMri9LwlagTQfvBZqYmCT38Qj4ofNXqP5xLddBM5Cx5jch1esAvwE9UD35qoQNItuQrbpMUlSvAQEodTUd9RsNBwgOIO3ejLISVpbXxDLofLEIh82juM9vYoTzZtaVvycMNes1IRh8C6CCWyudF48RvRyxn5u2cQAE2pW6HuUHxdtS6MqJXyRQb8DTGDNSz6Umgki5-y0odElwPQYS4QdI_qSlZxX9u6TlTniXJ1qs6-Z73Q6rmZtm1BwRtS6wjzo9eory0lyEiZmzHuikOXI_t0r14oZcyccKkoujrqLalm5dFfj5uxyGaiSzJAthDUnpljOZe1cWp6EnvxXW9UM5QF3KeQeyjWZG2lp1cb4K3L4MmOt0r4wWjNkU726c5kreDAiOvFhQhaG15psxWeLO3LWc4Sa2c0Qir8eQwI3a8uT4kiA7B6sylxepSXTUTvTiayQsh0EeAWtelssB85V7nxAtkXKrynblC5IpleEefIWFLYbufaaclD6YjN6JAP0NLmitXcKJVxoVGXQlKBDLXuIgtt3MQOBY7j1IJ91wQV5dcm7KXH52G2ui6H2KsPAeUMYsi7ESw2HLOUWFspOa5XpttBnyaJdyMDCODHTieNmyyk9cUME1SQn0bt2QX9o7VVs5ouzyoRPfQ5m8k4nH9i6gr5OvYgZttNAoRq7O5E1tTx_52eDb4V5nmn8nqvObnbrd3iE_McJkJs8ysvs4VOczx9bdIk0Vfu9lOJ_Ol4q_cYN5bGxq5cA5IR1zFeV9OYi3dzVHQFFXmniiISyZZZqJuBLbUAMdB2XXFgZT7gp5LJRM_a2o_8qgfw8Iy--VY08977NM6o1RHFiX39erzGuLy1kobu5wWpk3KBLwvCSGMTcQZgweRqpDl81RVTpRX1Wr1Dum7wJ7bSaOYSZgQdckLTvxXcNTji4ZOdV30NqTxQz3yh7LGvpJ9uKrdrlkp_SgKPkyCbBlaLzqC-OqmN3Idf1xvx6RLbeiTKsaNt8Py8-sXT2rJDZsdHpL8arrQprzFir4SZ6-Wln81AV7JRa9fJ1dGw9y5v6Z1a_ckyxDHgkH6-3JXCz8u2PDVBIxUS4d1iMnxMY9bSLbHzxCpyJm9t6WbRWS-e7ckiBHi_aOSJx1BPAPf_NKKEUEmQzPE1NTs5a-K_hujX6HR7etkr4ZDOnyuJQLzXjC9bBmJ1VPb0tEEj836IzMRpBOPRH4IrXPovch5nd90bPevPDDuylc70zxxq1mdnxP7j4wfqRRqIunxqdS7qiKkg_hn3i8RCOOp0lgwEQXM5quqLzNp3UkIquvF7lzRNi3wmK5J9XzxLxCrOOKks3VYgvTFA2_Q5vPqhQizx8rtFUQHp1SKle6O6F4-074oMfeQUPlwxb8yuo5r5lrw1qztxJIV_EhvZ1p7EA7J1dVkgDxqklWfnR5Z1ZRmEWxjiuf-A5WqLCP_JW5n44ag4xItF4jmX9ju5YRgm4yz6ykdeuYKCj-g7CvnopjMgHuLqmUVIoNxk5PrW0_pXQNo0QLS957xcHXrARJwX78k9u6fMDv4OO1rEVuFnVlshAZnvh53EXG-QwnS-2FF7YLP36-bJgrJ4-9R-iIqEDGpO_x6tN7GEqRh3TSLRWszhhvemcY8tjxq4KJlSsHj83Xfir1NospYfxQzOS2mUa8DCeYmtxB9alOYEcDLo224XA8C33pHD3a2qufqrRfLVkSWQ9WM67sLS2oCF0-rKnWtijeJ0DQq09gvSjEH39b2vDBH0pTHZl07rtV-BXe_IDtKW_NYpfVm7eqHqbezYmc3PUTdvGLSwG2I5e6Rb1HUij9j8gvlGjBFV0EUm1pQQLzCQElqlp3U9kZFdL73IrP78tiOSPel41d2UFfUi3DJJY4EjkWkoCfek4aWOK1WCgp3HXuNP2ie-TfQi-O_z_hf40NrmM3-U3DhLo3LL4hj2YY7HyDQFvJ3icX4MGfq6pLfgRyPSHkAVKfb-Z3Ptw&type=tcp&headerType=none#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B002
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIuiLseWbvVx1RDgzQ1x1RERFQ1x1RDgzQ1x1RERFN+abtOaWsDAzIiwNCiAgImFkZCI6ICJ1Y24yLnlpZW5lcmd5c21hcnRob21lLmNvbSIsDQogICJwb3J0IjogIjI1NTM3IiwNCiAgImlkIjogIjJkODBkZDIzLTI0NjUtNDE5Yi1jOTdiLTExMWNhOGYwOTUwMCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL3FxY25kYiIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIiwNCiAgImluc2VjdXJlIjogIjAiDQp9
vless://9d5c2a7f-4539-4e3f-8769-d0cdbf57ee60@ucn2.yienergysmarthome.com:55923?encryption=mlkem768x25519plus.native.0rtt.O_eMODBRkPlRgXvMY9V0kZwi05k92bmhsCkcSDE5oQCKxqeqLFRQHPi_2UdNvWTC7sQiC7nD1HaUK5KUFIrKvKkIGawtD8TIRbkFv9Qu9VGwx8IynPyDHnmkmfo5lfZc8aIH3LWBDXcIgOWzTByhZcu4rEUa8SUx6qEO2COxkWR02CfJYmNJrAEBtPVSnBaZ8Yo7_EO-qbM7kOsHeWCNMlhyRdp-K5Adzxekb9Cwwdy4WipOwZGzrPJApBuQRuw-mHeBQVJuRsG9NusaF2B5imNy9vxS06Z2BrNCyUqfcEsNrgnNeNUYgxCWSRG2VdHP9OahOaxusoll6rkkwBJ2j6HLEWXGjhYq3TxjqwIz-_Rpkdqrhuo6MRzG-clgt0xtlfg-W8wuDzk71VolKjt0wqkVcdawLrleMslKdcBgeDbPj1wdhBfCSmhyrwjM7rSP9Wclzjy2RzRzJjZMXsdUbIFetFAndFx_LPNRv9F9hWzMlqOujTaftfwk-0uUaIVGbPIzbaYsmjywlNayBAqsJbNPtck2ZTcyf7lMwZptDAwcJ9NrJ0i-fsoes4J6v6TOLvoxLRIx5sEwitAPWDAYWmyBlwl38YHM3voKtUoyu4KgnikuW9amHSy5hJgwUWMchCpIvbi7WSYqbnMM8RWgcPATn4w-1QstnJFqs4eMPum5U6QGfAIHV8Iy3Zc2eJUfb5trlAR5L5wvtqu4kKmGG1JEO7caeZM1SGqtKZhM-KMapYd7LUo00SJBtSos_CWS7whkgAh6W8K3kMYwWQKZU9q7uFixT5dsjsC2pKsV35UUWzKl0Yg5gtPKZEZW2BjJnvoc1KJIxNGfLEAZqHAug4mxEUMx4iCVw-TK6VKJYsBtVYV6gYxlVsy4leaewjQIsTnCJ1Qw_oVp9fAKRQaO8Auw0zO9YlfBUFihH6rCikFDZZoHDRSjerMTttUPi6Yidqt76ft-s7wh1Rtzr9CuC9UEVqGVUYK4FicC0kiG18kCBMm1tphbFRRWF4A2PeV4kqxR5kVSnkGq9nF4jVd91OohJ6h2iCJkSqoobehVMvldCeXKcgFPPjd2m8XFPUPL08B6vEh-0lXOB3lt5lRSYlty8GhAkCqn-ms8viC7e7uFsieAvKwcZ2VbcrnIZlm0f1hct8i4C6FMrruVq9VBNpVuWBit0LiquABOe0d4UsEjl6wROgUFETROUHaPS1Kr5CYK__Q6Q0NUyExrUjogvMxlgGgeFoUUO-GpvZgXYqDCFLo8wTe8hmkXZaS483KV3qd_eoCL7-kD_FdkUZEG1WQksjQw4icdzzpFhOioHIUgp-u_uPRsR4qwEyXCvOwfa5zFrgc-yTcNlTcbRpVFo4p9O7nO8Og0NDJ7lBo9qbm6Uvl7mIWGTVdaeBu64qY3rGhG5-g3PWJ75RLPpyh1oCIBrUNP5dshCDRUS8e8XJmNH-PM_ka54NM_frbEYjGrZ9goFKnCTlqBYpM8MyQTtilgL5gjtrVNa2yeXbSUF9FldSlN5chWkZMVmLGOZ9cpBNiNpXgGAMtKUngCnd_gEHsNIaqsnRdeUVY7EYVN7kM&flow=xtls-rprx-vision&security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fzrsbyy#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%E6%9B%B4%E6%96%B004
vless://3234f332-d2c7-46f9-f011-abb44f7e9fc6@em.yienergysmarthome.com:11853?encryption=mlkem768x25519plus.native.0rtt.xgpE3gyfDJVkyFEKKe-ZrfGwPj4GvkX55sSt8QQYsUY&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=8_iJqUlajiw1OpBuSQTAOwLt4-hc6ffvRR-PTNrZHWM&sid=0fb1024a&pqv=UyYmCqK6aKs4fWmELPXMMsDFjyRylfD6DAgZrTEAd7QwrYh4ccGBqAksi7-4bURUGyx1imFO8_oIje8NUr24C-Q200Xfy6p8a8P_brsZz8Oqmm7XHEhTxGscIQIFCWsNRjFHB4iy7QqQerm2Oq0M2Jodzv1R61nYm_RT0wZYqED9avLiX9xZ6ctA9FAb2kU6otVfbnUTfpwX9TtB7y1Xq64MHS3lEIMhnUc56I9jXtj-5q8_a_7NIcQgBGzOAXZn1LRoI4dbnJ_Y7ic-7QduKLrFFdwMDUZGgJWDFtK6q-ke0e06byEV-JvOjyWEv12xDe0whVCcp-ugrPb0r8UgxkN-Si-VJEjTNTV77HNBZoLKGioVwdbazbbtLkaNepoFvO5xVV-C9IaD1To1Dimq_eVJ6jtj4ycNkr6p6bhmAwUahpphQ7VSCyPi0xWXOy7mC5w68whFaukl6iNAfC2LHubwsOD96baQ8OWkqqJmf7qscpFPQcCOZlM5CJM4uzXfAG3N0M_8WpD1QvWQj9ad9-Fr9sT0bJt2Y77GaAKi4eD4GPfDUTJhZySdcgqNHVC258iPK-Yojh3tqvYxs9wNh2jL-aezlE46-mJPX8sb4UFt0pPjs_FERvYA6cTVH8kZH1HlS5n5HbLP8nThPP5DcZ8YblnBIG3l1CrfjJzrYDAAlFHpfFX3ir6_WvLrUiJXkMN2KhOkXnJSoKvgtRt_cpyb_xfeGD6lRpN7O75UQyXJa9WIBW-GAD5W4otVKDessipsXZuCMNWTJmXS9rPwKRpGcLPNBEkyth8CSrfeSgVGuoM8t27T4c5zUzimWRc-ga5-gnZLpj8wikI6wQ-HBY8G687TISEG6rdgs5YEvjwn8XpPyR7TDmJ9glcMl7wPtBZDWbPFg_kUCC7IRseTWn40bEtX6TMhBGOJMZ28DNxfFr3r_7zTVY3KdRLM9svd6Vdy-98D5GqMJzWM74ic7MIc5WsP1X6nkBk2cYd4xNfMxKSW5L38RwYcg4ZBfDnLYblrkfoOGODXXqJ_056XxfDW0RZjd7xw9mgGKNpl7inWY9h6pB2KFXBJmAiZVcHJfL-wkDXixN1ZjKcgtzPIIJDUevBNbUEJlxYidwc8CKHpDLPwAqtT9D0hfcyIWK-fom-iLigxt2L7aQ39FQANqoPiFShH7w2qxWKBaa3iYiHY9TEy8J-UEAgtTlyi528X0JYtz2Fy44D1_MU_2MlcAoctlE1UgMTmxv6iMYqxv9iKRzP9zONjVBsQ0pCyZ15D-XufwAFCPN1gXNtp4EA9_Chn9xueZA6n0xoZZWJ6_qGgONPzKvu6Bj2VjZs2sDJyABkT33LiBBXTMcYYhjDjdPlL1b9cTOVkjhyUyJ2huky9sZmdRcRSfytkDs9vedZH4fsx8siwoQ6u2-jf8oRK5hCBTQ6j7kkc2MoJTBQc2yR56jEGG-yJ8fh8SNgyks6pvFLtw2GAjAF4NWvgeuTrTFQ14Oj2McqIlu_cTeKfitTySF0fKMTJBlD3Lq6vzatQUSXmAmCtrhO8IsqWIr5faYOf3U9LK2moy3SBa4Z5cP2eOTVOCiQvmNkuDZvc2ycSvd108Mzwph8GJ9lEXmDdXdmc4ANze5qS8REiYUU62umccTUEJA-zuNdDsPEtrMDqBQPcqGAnZJVYk2XHubgUgHaS15J90mnGjJjiaWV_oja-uHBSO5Q-7aDgyNDDzZpEnXD96_3l8PsZFMvqFH3zH-kT0xPwO5xmW4HOTWytoFeMZuUd6oBhoLcXnicjzTyofGnbH5ze-cfMAi5lRWBO4Snyxv6m5kmeHlnoKO1FG-jwcHeb_W_ILX9kLQgdZ6n_k-kn7vwVD1_fdfvlnKE0jP79WLzX06hbuwocza5AKlk1WGkjfc6WAbAYMGR_55bdBSH1jvKvKM-VelRq4rvjG_GJqb16z8Us8YPurFQjERL5O152EyE8qc5eYgtB_3-MKCdqj_jPwPrC6jNWnPT7SuHp0Z3_XV-vzEbAkvcWV7o-gPvNCRMjju490uNfXbhiG8Pkh3v2wDyDEH5Q5IFoITBN8_UWOesBN7Kbqdo5Uia9rL5tvsxsfsitkA7AHv6etjzOmNqZEfQBY2kxY5dNDUKi-c1G8AfhEZ29dqCk-HIKKGMsONI83mhzIKN-fc-7rdxq3-4H9elU3JvcUGMCZKVf0zNcidJ60JY89xmG0Q7vZf1zCiAgPqerOVmrnc4fcy3D4D6PxKbnKRO1QNIBg_6rH8mrJfpGmWIxXtIkbCvb_JFeY603W0kFLM0MJt4ELQctuZlWm4aUMbYg0IHF2huS0-olK2Z9wU0ASDvPFRqUKZ4RFMh_9bWUnBLOiQO9F_2dTmZeIdZk4tKboV56sNr99Z4zFKcJEIJOraiUVQFdRyof55BGIlQNKXV7ijW1swgCbkqB99fNExjtx-MQml1drcc8-P_3Q58AhyB8pBidAXhZE9TQrS_40vsndqJSWtCW1PHLB35YF8XEeFa2DTVonI8QaM5boSfukMU8Y8l2eU0LyqHNmq45PdycsqGx346ow3dHoO-dyi05Bylvw5IDKAbci8LCmz2jiQRguCc&type=tcp&headerType=none#Email%E5%A4%87%E7%94%A801
vless://e15b3ba9-c7eb-4350-95e6-cf0f791266b5@em.yienergysmarthome.com:18279?encryption=mlkem768x25519plus.native.0rtt.mpjJvCc8cF5A3wYseUtASZabvY0vDa6jfj5cFLRgTCM&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=UqEWQFrWnopnUkyTLebqDyEWZYhRvDOJUXDsFOo-5zs&sid=3e774ddf&pqv=8kSWgS3fsFYAUMTxtnt1uJB-Us4BIDnsls93QTWv1PJe3PibcxuDu8MqarXbEcmBrHvSeuJYYtMDHQQBPkwm5MA0CfxH5ST4N9Pn-BGrkt4WHNN6T3lOkz5phjR5QG5if4ZKixQOZUWzjfj-jJg-q25WBKI4GW-dxbao6mOAxuKEc9WwXdEi6uTRqukXroOdnEiEVlC5aeVIBkO4N4KahxAnzZWTOAXoCehKBxdSFfMuhOEGqp6mxYFRKx0gGGvgfGfczFrdbTI63aGyOSUP7c6t2jM5ARV8N7lDZPDlKHAgwZ8RWr6PJ78GrvnAZ8Dn89QDuT7KVdzio3qK4hxQJcPbEfAZfuK8Q5i0Bk2bIiWNmnP4rSlbx-lbn7d0LsSToyOUmLsQ0d92ipKNbQOF_LULvjWSXhSPEHyyRBjRODLf3GLNs3S8_qUKwOzOTff4mDgA_c-oklPHfa8KwdOYbEgYBvCW4XLywmgcP7JDG8RO1yv7DYkyGQXPe_xQE4v_dAkZh0fnKlwMEcJiug9rd3r_36Pskg-G2LKQi0quYwZR89JpAl3N9fXVnH1FQ7jESm8tBv4GE81ANQeauW1si3nselGpVgvFPva_j-a66hvR6-h45CNoXxPlutNV0RBJI9s7BFQ_JDAEP-Jxe96yRHdsOy7cl1EPYqBQJLzkcPj6DX6rDB5Q0tw9nrXTa6v9b_LWzIzbQyI-x3K_V9C7u8Ca6Mc8zjLTtpFLmieTWHUDZMkyTdR0gvsOhOnkAAiQe9aKGE5kP7KhcOVPUBKsR2ynZNtS5-o_jpA7BuXjhVL77n73TVashzlIpBgYh6GYc3qgLWlLl0vMTjFrB8gwnAbCYTU1WqlLVW4GSVnqq0URcMsG0ashdIbZXnqWC8LzZl-o7CuTCKmMuJ69G05JD4mS9iaDteMGopaaTSR-q-lX9lN67XtIK2IuCzua2mfHoqmwzn2v4xk0HdlQ9MO9fKWOn_Jwnusnca4BUqe_cRmtwA7HfwmmkBeEefndV_k8pMdEhzps8cbRJCcIxxmfaLXgZlD7ECr4VKV9mHvjLptT8w5AypepVCob4fSK3DMkuv1suVvfwIwdLdOOI8lAoayrAdc6vZI3fNt1Q_CWCiuCdQOIwfGPjAWxTfZ7gB7OcZzqXMFCatppAlKaL-ub4NxwZA8ghbpRVSCQTCiowq2FMF6EgaBOiD1KMW1uhVuZg_5cVPQQvqnV0qbxWIwEItX1o626YIfS3JZYIQNRsvz_xu8pEZ11SveIYYoqlUG44nd-aXkUTrtKZVw2kTiL32fVqe1n5p8F3zjxeSHxPGJypFn_SCMtwgki6mHUyjO2soBMjP31P57LGkADmuEJhrIzM6XG1Zj3EWo7CLb8jRHtQAGzG4jmSKOhBLMbjDlh901BsWGT5GOFiLzIwnLaN3kGJrttVbq0KYdVJOcoMSxRZyTl3i56SXxgy1YilVBGJ_mqOSF0sOkIdPTmOKiWk2kSdvgsQTWk64BEaYpeAuzB5ZN_ps14a0QUYweBNXI92VSLgbUHV3V3lijGwk78xcDcuKYWoa3EEHak-jWQLcDKWCrx5oCd8Nqlp2ImYcpMj57kzfxbZnBEkMUP0ZQ11tyY5AaEVK7EdTB2kN1j4LKjuBp-9QM5Ob108gos-PGszKQ009NsX2Q-J4tgBIfEk1JuflcTootd4GBrRSWQ0MwWtpsqd4FMKb4QzAqy5wu1p2SV0vIVGa9jVFw4EDAcNHpXwaCun9_BI2YgocxSmokF7iUsqWtpfsmEBfDbbhERvlwKptYV7RSqnxqzJrqGAOyUsQ-Es4EmbC5szujLZnOF6tQWhRF48yC7R5KnM0xr3s4T2UNBM-gT0tfq8WdGhI7Gc4DiEiX0Y_dCGGtJ1fAb6OCsmY35QYtmqJyaawV_eD0OvJ1DzCaHDYs3J_CwImg2hc5ehAyR3fApqSlX8MYL6stuBZQIPL-x-VmAoKT7w8TGjCpteb-R2RKyqMMDrEPUBXPx3sISo0ui6UToLY6tONliOXCKJVfXYTACGCuwH8dG-83nIx7qqS9VfXBQfXiG8Cf85a-p61s9aj_VoaaGmY2Ku_-WOZg4UDW780q5h5TQVzVsAh7LGkvWzhL0U1_fUC_Qbzj5qfQDOSrf75uZYVUW6zFXiz8njVXIzRP0zqbf9bhrqkONBDCDsxrM4QFuV1NC7lMFVIjzasL0ZqONQK5XI_cnml5KddlwVKRHOlaebKCvZVMBlhfycJhFtpgR3_yKsOiQVVT67X4rjCsR9mb09OF-Uzl1gGnW0ZhCUKZCH3F0wBrsT4n7l0bRy2eTfnikgCPAImCyYOeGSh77ZAcebODg-sai-1VwpSld7CYczzrTEhb31SS7IMirO_HFNKW3pgurXTmLzta0Nmcmr2dnmzNZqScqMXBZcj1v8I0GOjoqTsBA2s7saOp0Tkleegi9c1684KuJFRFMgwZtpBIcotig2vPc42ddZjiHRlpJkwoBGF_O-EgvjbC-yvkaDMO3MkiiAt2T3xIxggPWmDUCw9k5hTW6HVJrK5ZQrVNPL2_5E3JBVL4XdgmnfS_zlQqDd6C1Cwub-L4GWkI&type=tcp&headerType=none#Email%E5%A4%87%E7%94%A802
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIuW+t+WbvVx1RDgzQ1x1RERFOVx1RDgzQ1x1RERFQVZNIiwNCiAgImFkZCI6ICJkZS55aWVuZXJneXNtYXJ0aG9tZS5jb20iLA0KICAicG9ydCI6ICIyOTA4MyIsDQogICJpZCI6ICJmZGVkYjFmNS0zNDZiLTQ3YmItZDhlOS1kZjJmOTNjMTljYzciLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi9kZnNkIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCINCn0=
vless://34a4e1c0-10ec-4140-8872-f9a0af849253@de.yienergysmarthome.com:40124?encryption=none&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=1g8YhsbWbHxnCX0MD9NuG4BSJAwFGtXP0x_zUKkdpwg&sid=b333089b&pqv=3IrS3U7XgqwxvwkaHIl-AQiK9A_wkLSTpDsbJJ0AqjZ3u0orKfHuZoyd0W_iRyPJPLLTQwgISyPmmoNyupWe1UFap3MY-lR7jkKJzv4bSdARO1LmRG0XXYLrPYyRf92HmSSxxuuWm3NgyVrxH42IrpfpL164uJ3D1jMIUgz04SFj3L6ksQjwCE4z-1nGBOcKg5cvZvgYDgQJ2zC-K86A2_NuCc8QJZlLtXX8vz2jDCsQgeMYlH_bGkeS84LZR7cogaZQMCWwWlFbWZSKWX4W8XCUl2HuMPgMkOTY1camDqka673PkFbIzVMzxYpp0wcMd2WsppPPqQjVlLsZgwvY0cy8-hQQOL5G0JDHxY24ZfOVrmlQKIcE_9yNo9eNGRN8XkUDzrI3qX64uLh2pDB3vJ4m-Y0wrE86R8KGkP1qiS2UcrTQYoh1p3jHzUIcDOMgzz8bulyh-InxGY1oWrApWC2kQdkg3cw8YvICIUkVUFndu028AgD17cYpLWVCML9grkGFHLVa6K4fFmXjDh3E7crT_rx1sm3ZMzfJMYw8W2EGjNP9tS6zlWHna4QbAZ6oNcTsPKHfLlLzmck8-NjnDU3PpTqRPCxQfsjfWlQZenPpTNQhQ2aHJ_VbBSUPW6ylzfF3HKejpB70xZw1N2-jEmL6RxuVr4J3upiV-so1rKURQCXxS7kHZUMgcdi1w3AjSCZ2l2m0kzrFhY9Ce3roBVuQroB8hAOClgwrBKtcbVB6GmM6t7Let-cqs3mrQtxUecITQQe_JPZVO3WozzU62JU4k6xguFeDNgoX3eGqY5hPaI_mNW9diXVAWyNUD3q0IMPsr7G_J7piafifPSM8lHO2z8O0sCdvaOyvlrVlJRQ9cPJ_x2MvKaCT4eZ15K98fevGm-2IcVjz-7qb5rPpltHTZ0vwGpjxdSQLgssRvxsK5f2RF_rrmdUxK3uWF_hkJWA3Tu36o_goLMiukrBALKo8qGBKhqvKn3CI6eDd32xxTHecYbwtyObVqTWb7jUi81fCTSmU0mob8-tTf9jPNoXZ3skSjl8kxd3jJDvhpJBcjfOQahI6S7m-e94yPWDY6rdMXkw7D7acPwoQqiY8fl8XGkOhiPg06eEDgzaOeoha9eYl52IyofoBBsn3R4iGU0n0q_Db1c7VrJKjRq_CfF281UYs-nlb8Efzu20RKU83l1vdfT0fJlXqyZZZWSdn39CI1aAnYfG-mz0Wx9WC-lhtwUY1_uqF1qikBi4rSg_exry8N-OoLG-FQG1vahLkCGiijRJY-KGHdXkcT_yGdwomPNIPz8GT_lkxHe9WxSArRYWR-uSQktAPz12yctHavlx-8C8xUQx3o_RpxikhlztG-pj8jYf95XI4E33hnqZz6nqvAnetk41mv1cRLIx1sMaBCZXjBE2k7FE-761ZgoaBGnOt7B4wyb8Qgi9DVTOwTTtm3m9sMIzE0gTw9OgmG_dQYWYhxFQ9wETBibt6wt16WmdJ7wIau6jKm33gzZhMLYCjl1G6uUMvKkRqqYTb20U_pFonUworBbxR4in275c4V2AgkED0-VRndyjHWHiljGwWTeTwVS3Vu0JH5GnTyW9QjxpSETjZ1w1Mdxb38ejLNJY7HgEPStZpQQVKRC1jkWnDDiGFtjnP7Z2blpNTaZJ5w2VUYdous78-j6Q44YZkj71Oc6gtjkr0T2ZMtuOSqRYyWC5_U2r3CUSr6S1Rz-QfZJeR7xk-59k7j3dS9OtLkKfi7h8VcaNJiGusNrtwAVwfVqlIyIim5KzPB6IvgFDm3urV4r_xldIzmPxuGWQKsM6iCE-AtWSl54DiVCzQ0ARYCXXC0ayYsgfFm_goPnUzn8sYLpwFlz1d0Jak24ohh9X02iqQQ1DKmOkZYj_kio4f3AmSiA8n7C9enxX_blvJVrbl59yOUPFlnk_4T6M7NxWXGoxgZHIAHgsrBxuO4UPn0DQIf6bUU_Jdv_ZB1XGXjjIHP6WuigIukxeCFe-YvH5vcWwJSiOpqXejWJbadkuDjgzY9W-vYpGvxNWrMCf88Vxkr9sGhyuMTeHCA241LEbEjbr5gWTS4Xz6bAZ9laWEwpGfyvBP9VkTcwK5QKg4pgpqgUoJMKj7lHqqMi34YVddbpO8k8u_j0krVs75Piy_ncs7XPh6JwpZ63wxrxuoEYx040cZ3Vj8q0DsPg0_WbZtdKRfm72wrYljHmMJpv79U9gV7r9VhK6YdARRiQXTqawVvZOnbLrMvvkqklgiNOn8rqhNYkl2bRYlLTzWjoiA0DX12-grB0mtNqM6X5uOw_SZ42qYNfpX08Fn7YhJMplBqv6-7QO_VqVnm1qgDeb78hT4TYK2E5BDm8fy9rPMrfG9_GByzLgIt7RxKc7Y3RorgJcQGCq3xHk8SxMc_vcyrXsyT356GnawnhytYKFPQZue3-HK1WduwaxCWh0NuDq2uQz3ME3xJEa6nJSWbIvcd7JyNB--3lAbh6-FHyiE-V8XBQupNgqNWjkIVgw_bkNf72W3ejiymWCabKRTpevJI4scsAm40zakS6TXrO1K2mwC22gd5q44I-wqY4amoWLBTFjIyDanS7-DJ5s&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AARE
vless://de14d094-e974-4d04-c1b0-3eab0cdfea22@de.yienergysmarthome.com:27143?encryption=none&security=reality&sni=apple.com&fp=chrome&pbk=pQuJwAy_KfDlCV_YrM-4ryFRGIoh3pxr935GKN4iZBU&sid=85b80697&pqv=uwf5QA1nF2jAG7HKWgskwGwYzga-1JZ3kOGslkdNsMKSWWvk64B1-GWZ-EXtV7oa0qEX3VnAGwP2Y8aVdQVGU4_KmmIEAc8cRPTMDFVTWM8XXFacCll6dk3gQ-ZxuGrJyRDbF-0jUkskC_Xf_jpBCFjwBcJULeCi5MZPPgzgsZh1Fve5xy8M1Cf7dzD2lpLbBbBZMK8JBznxGX_86FQ5Xk7vso8hwN-rV3y71W8gWpuuz2YRPZfxCDhFTsoJ7WAn7dSSLVQMW7eHYdUXXLKAx0NkdhJuYEwri_PqyHY49Ufcq7QTeCiZYNmFqx2gXXhKySuGObTcuNg6ZsUor0SZFbffBFbVQ3EmJ3HAu4zvIA8tW6kZrNxACrF-lpe3T59OX9uNhV2Bbd_YsCkB58X1HW5X08gX2JbIlsMpyw5Fd9j_D6pHSINsSC53QwsVnHGPlJREQuCly2Zb1eYuunAxoAqoTxccPUhbdJUJW5ai7D1RsOxZKm6eTePXQV04iYI5cK9W0qoJa3cZ7aVqXgebJ0g3bQQ2GrgBefPstji9tcArmNIUsugbSHcvw0wTKP_yNsHAv_YCN_wPcukmrysWmYfEDKe246QJBU6SEYZjTU9eC13Gwo70iFZqCD6fdEdsS4xVtQsacAJcY8THNhEwn9cn_qJ9fyAfGAibWUh9VgnDdRYpgiloUU2LXoKAbw0X3fj58OX_FJeWrOgTGWKlc5BtKXieE2P7V8cJLJyILAC6Vj9PfTbKgdmgak1stWCAt9iKYeEHUxOQwYgkLxYxKbk3rRbpMukjWQsyGEcq4tJGxkRbcgVXP7SkWapbGjHvaTmG71lJ-crXPE8VRdaWRqWaNDeceoYIY-0slmUSCxuAbLV2IYF1NBASt6YyHxjAbwS49NYc92867JSFWhiDx59IiMHsf8ddIYEazIeSoV4m-ONMbXAAdYkusDUoXolt9Z5IDMo1gtipI094PxZKDJ0qSdb1oqW75s0taZJ1xgU-ktqMIigw9jZGwuXTxg-Pofkz9sfgbjQOYtGRml6gTvTG2hwmepnsMslXiXFKVUgaPNQ55R_Q6VT-SPev2sUNjt-y7_HOimZ0sq4Va3Nu6yoVBLRCoEV4pYMyosrCzc83zGoK3CyWWJ-qCR2HmpEVGf0-wEOZt81pmLg0uo3Z4LvN1tnsau2PBHWKQist8zJoGlfaEktQxRWYwuAoPTpET3uYXmcfnjI9Qbi4mpXvks3IvEvFOaCkpWip2P5w7yhM4IBH_SMvQhUUquAIaolQ5LSnUsf3V0ElUx0gVffTt7aR-_mpZvegBhsLhpmYvChq8qktw-CuFFfTY4oVryD_5nF2wPl6ctwSmb8w1lo7fLP4RG1milVmge04ibK1MdQk42_yfJpzS4A9eUMI822iXcKccgGWPZSDUVKK4rN2dAb-ijn68jLaiuyXUwOPTKcjksAUCj3k8hZfgvk-yrM69SV7d2Vzblbye_P_pf3BrsRF8b1HsO6zdV_-EdqdriNCxZfWUH9qBhn2qBjtkKqgh6UA4eM6efA8VB9GhwXZ_uC7FIo8uzJ5csQf84OHksvbLDU9e1upPlQeYoxmVDAtNlXKWWfkO_2-J9H1jiDFbI9LmoSu6weBKL1u3JZ20BsMpRXdxvHlGmZ6hSQWpzPoylSOnEPOoajWTcW-qK3G3gGfdsX-ea_AM6lMkN5IMMlSUBdmiM1CwZHGTJXxVkDvmL9prRt3J_CG1ffWExAfQZ0BGQ6AVX6wLeGmGFZRoKYjpbzxebrW745IVxvowH1oaYeWLE3KqKmPCkVZDwJCEX9lrH1sT9AB83CXJZBAAISUIKzXJmf-eANXZuf8EAoutMLDBlsQN6zrya1OPqRakYbmrdRa0RiAuK6xwWbfKN-uz1E07xCs07MEA3-3jLR-F6MuUgGBXw5TGk5IwU_iy9xaoXuCYgrcMJGmhq9yxxcraXkqlrpu9ugBZD3S3mTd2pHdtm_UYxdT0j-eSy2CURLiZliBH6I0-YGfU5qA6BUJqQavx-FITRrtNQ_6kPfj4ZSc55zresKo5AhCEntWRDq6hCtuXyIl0phKJmMuZzoDVV5JA1TvHx4W6E81JGhu1XKliknTSS0mBc3TKMGBdLmWII5Z94jJrCkVeNYTyobLWLEdpXTRwP7SeULdLsDEkzw-bdnqnq-ERUKDNMHg1wDyPKqFpe1dYWIJpJqHtrNhyDZtCK-VrDlZUGMLaLJwjHYiU26Xft_k8fdi0-NFoi3iZhAwCa1x3ob9a1omWrOxSsSZauDAw7wK-RKwsnpNDmw4diAVxQTfZwQnFUJqBfDLxDElkt_fGAJRLUgUyFU2tr0Rq1hdO9tDRDNZ7lnX5cXhfawJVjjV4zbUrkd-ZK7Zhu094Ek-LXZwszVx82gsWbW1GruGgFAXdn1iIEkt-UuIHyIs0AsMjRiK4x-jzRhKSDq6cOgW10y2WV9H11Wo5qWAhH9YHgqG5Vd755Kux6SoeueTq784Gn0Mut-lbIcWDPRBEa6WWFxLN69W4O5mf1V7YBTGVmTv36VG836tncKCCjOjxPvvHsQDJVx0SXVwexLkPglKsQ4sqlQC_Vk&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AARE1
trojan://SYkPhwiJzZ@de.yienergysmarthome.com:42741?security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=ws&path=%2Fxdlbv#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATR
vless://8344f431-926e-4777-c049-c2aa07b16a8b@de.yienergysmarthome.com:56996?encryption=none&security=reality&sni=apple.com&fp=chrome&pbk=X2HLFnAutiGxWc7fj4a_laI93Fm71IEx-2nKsF0ZYCE&sid=5d0db1ff&pqv=QxR9ktI6j54XvgXHpsERXwg701Cqi0rVc3fdu7g9n3CyfEtwOvF17_-1xk_utN0Qm2D8lG_9x3oQnk555jWRBuLPj2sAXjXsN31v4VeESIDsMXFRuRo1KT3FdCgXluYbXqhJFCWth3eQwKeiOQOf39uztJVXt-aSlzwon74S4wMV8ctU4Cxic2RLdrlgjSbbizOzLKd06Yfdtqu0A0DE0rgb9q45qEfSI8dxRNyGKRkNgtuduJr4DfwMbHZ5l91IA_gCagFd4UCBmfXIJFnoDvRRz8vh0Klem4gPj2RYc_Uw3TnncM4y5JehM9pMq9kXPVvD2-b5vnWsukOJbDYdgO5B1n6DBsn71TtxG-gUbHP9_Us9uiT7An8anD3YfO6LCmUMDe3Lod4iMQeU--e-GQiEfCfs4eUc4r0kJs8M7rzq2XXYw2ZCa5iWfZX1Cn0aLq6UEyrbEV_g7V8okwe7isjfahliu8XSW6YBx3TLOHgXBZqulDN8SIuVMx5mIvWZXIqbG0BiJpdZ3CJOVpMBxVBGolFn_ADuyQgg18sue2sOxKugSrJaaqtU5ieFirzbCOolR8ePOH0-Iedrj7Q2LhQJjBWwbZ2bVqfPZiyqgbrfwmyyXYyaF5PVpDgNPqNaYgrsGQ4uLFvdpCgEjKviJGFxn8pW0inhRzZyuLD1Sm5DN6GWGLnPmU6WF_jp4DViN0_EfZChpU4u7Gd33SdAifgre448Hh7lr6jEr4wl9DMBZdkBsAeu8Uj9H8RgI8i1n4YrryUgIkULW7f3nB1fDMWVoTYkYOh6rj3waTQaErPKwlI73CmmcPfE3Bo0ksWeiRqwrA5HMPH8FcibVJ6aovOjOtKL99yVi-dHZP07HqTtyGIOmY0x74l4UBSo2LOZlbeClWFis288Gt2t8VIvtTMdQPjLx7cq4DCcKQlmMaWLu7klBgcEn8jy0ElVmnnvrFRss-asSrgQBqAx6cJVEVM4DwnTRyhWj2F8Pi73mdD7c9W6sOSAFbIwVei5LvdhmyA-8xIyfrPGH7nZzpLftRP5y5CgRH6SqM6K_FuxBijfF3pcilFcSY7TAr5etFRhKieW3uSVBcz77yge3gJjsX777iJGLMePHVpP_tcirHLCLPLrtgVqpDpTM82LTAG-pGtTRnb-jMu-CzNhZSnR_vQRnJQ0jyDOm0tsvuGl7UwXfIycxpEfFRdRkRyFQxdiq5FVbDyTLIWwxtAIBinDmElYHTSGLfQ2QLYFNgFppuhq8H5hdtwVwghIiTD_3TXSetmo0e3lLVniSQEwgYsxP562vkaId6-nn2rEfsCkMlAB2Z7Q7pf3Xb7XhuUD-ig-n0CsNbObA7Tm-jP7d6vXJ0Xbya-irePdFcaTtZ7v-tGeNJkeWsDmtZdCdRFXhL5rU7NcN_1-rRT12T5J7rws6ZYN9vFMZp_4l3NYzzcrsN-cf0mdoEq-BMGNFycPalQM1-7wdmzCLm-VoLauvgfr3_uQg62AUJhyeduPmaGmOfGsocqDPuIXMwpC7TJPA_z4nxcFRm3-psg-EHV08sIcV6hkVcHSbu8kDdiRCZz_3CefOjebEEb44UVAb0s80x3vvSocY-VXTWtR2x0IBI03bDiKhV49W5-7iLXCG5BaWZ1iv9EScSJgZ8uTNnT0v46KyRG1LlFQF91SiZw4hRJyP3j9RhXj6hwHvQiFlYVHJ6yBf1dlvMfvuTR3050nKFzfa4Qs4OGB0-zaERQBwoirG1p1zNYaddRds0siBgUEFNxXAYGTG2ImJu1zJ0TTbWOxT_1UrYWUpI6-hI7tqRpgXG55i9wD2DdXCF36_bT1bmD8HlWFiY02As9Ly6YfEORTyln7mm5McSj0FObWmA6gSV6pLBEsTXD8MPKhYVcryk1WvmW6i47oMzm91nrj8-XacuefG_AJvIpT6dRT2n0yFq8K2hOZPXUDFmAWj4syfYePm3cK6KNLl3XAF9pUHPBvfT4OIQ7sMAnU2-PijKM8jeXWCgWN_kPgMdCZbYwKvfrg2Aq_udMa2YnZ_25ZtJGxozVnWuclMRDLcKJA5BrPB--D4MpwUWzyn0ilXtViqKy3XXhmKmGyW7wnrgW63n634ro6EWDfuBSQGj6w_8z9sLVOxLuqPkLx-aWSYQYzQOf3TpVs2hPio7k9pETS1j-1_0USPhNHngQtK4X6QpRIB4NQ0cno1jzX2Xiy1K2n6GQ5eU9pZjsCRKFpRKaqkZ1HLgny9C3lriKd2YHFINca_U4VJPc8RBFqN97oaGWawT1ycypllglJU0bmDniGb5LKBuNNV88j-q8W1DizikhDUOEwiLhb5HUQqAF_Fb2_9FM8dxR7jtDYiHT-hs1D37eN4AIsFvedBoqn-9jVrMSlrrLWAjIDx13E_BcS0f-Oq-VNBwMQH8oKJSKDbXi8WuWZKPPOFtO0MT0NtfPmAWKhbRCj010JaGQP-Er8bdqbVfJUa9vUNWsUaCqBzLW0f3ud2hrZWLf04ZM70gcsF2AzOCIOXkj5WJNrl2zNJ1kHaUIS8_Eomap_pnWnhD9TVsI37DgPXdiEzcz1Az4Ivb4-C3XDDfpdz8juq1GnUmR9tKY&type=xhttp&host=de.yienergysmarthome.com&path=%2F&mode=auto#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAHY
trojan://7XY3uKSX8k@de.yienergysmarthome.com:52141?security=tls&alpn=h2%2Chttp%2F1.1&insecure=0&allowInsecure=0&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATr1

`;
let urls = [];
let subConverter = "SUBAPI.cmliussss.net";
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini";
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent') || "null";
		const userAgent = userAgentHeader.toLowerCase();
		const url = new URL(request.url);
		const token = url.searchParams.get('token');

		// 环境变量覆盖配置
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = Number(env.TG ?? TG);
		subConverter = env.SUBAPI || subConverter;
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;
		SUBUpdateTime = Number(env.SUBUPTIME ?? SUBUpdateTime);

		// 修复subConverter http/https协议分割bug
		if (subConverter.startsWith("http://")) {
			subConverter = subConverter.replace("http://", "");
			subProtocol = 'http';
		} else if (subConverter.startsWith("https://")) {
			subConverter = subConverter.replace("https://", "");
			subProtocol = 'https';
		}

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;

		// 流量计算修复精度溢出
		const byteTotal = total * 1099511627776;
		const remainSec = (timestamp - Date.now()) / 1000;
		const UD = Math.floor((remainSec / (timestamp / 1000)) * byteTotal / 2);
		const expire = Math.floor(timestamp / 1000);

		// 鉴权判断
		const authPass = [mytoken, fakeToken, 访客订阅].includes(token)
			|| url.pathname === `/${mytoken}`
			|| url.pathname.includes(`/${mytoken}?`);

		if (!authPass) {
			if (TG === 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") {
				await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			}
			if (env.URL302) return Response.redirect(env.URL302, 302);
			if (env.URL) return await proxyURL(env.URL, url);
			return new Response(await nginx(), {
				status: 200,
				headers: { 'Content-Type': 'text/html; charset=UTF-8' },
			});
		}

		// KV 存储逻辑
		if (env.KV) {
			await 迁移地址列表(env, 'LINK.txt');
			// 浏览器访问打开编辑面板
			if (userAgent.includes('mozilla') && !url.search) {
				if (TG === 1) await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
				return await KV(request, env, 'LINK.txt', 访客订阅);
			}
			MainData = await env.KV.get('LINK.txt') || MainData;
		} else {
			MainData = env.LINK || MainData;
			if (env.LINKSUB) urls = await ADD(env.LINKSUB);
		}

		// 合并所有节点&订阅链接，区分自建节点/远程订阅
		const allRawLinks = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 = "";
		let 远程订阅链接 = "";
		for (const line of allRawLinks) {
			const trimLine = line.trim();
			if (!trimLine) continue;
			if (trimLine.toLowerCase().startsWith('http')) {
				远程订阅链接 += trimLine + '\n';
			} else {
				自建节点 += trimLine + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(远程订阅链接);

		// 正常订阅访问推送TG通知
		if (TG === 1) await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

		// 客户端识别 & 订阅格式判断（升级Mihomo/sing-box新版识别）
		const isSubConverterReq = request.headers.has('subconverter-request') || request.headers.has('subconverter-version') || userAgent.includes('subconverter');
		let 订阅格式 = 'base64';
		const forceMihomo = url.searchParams.has('clash') || url.searchParams.has('mihomo') || userAgent.includes('mihomo') || userAgent.includes('clash meta');
		const forceSingBox = url.searchParams.has('sb') || url.searchParams.has('singbox') || userAgent.includes('sing-box') || userAgent.includes('singbox');
		const forceSurge = url.searchParams.has('surge') || userAgent.includes('surge');
		const forceQuanX = url.searchParams.has('quanx') || userAgent.includes('quantumult');
		const forceLoon = url.searchParams.has('loon') || userAgent.includes('loon');

		if (!(userAgent === "null" || isSubConverterReq || userAgent.includes('nekobox') || userAgent.includes('cf-workers-sub'))) {
			if (forceSingBox) 订阅格式 = 'singbox';
			else if (forceSurge) 订阅格式 = 'surge';
			else if (forceQuanX) 订阅格式 = 'quanx';
			else if (forceLoon) 订阅格式 = 'loon';
			else if (forceMihomo) 订阅格式 = 'clash';
		}

		// 构造订阅转换聚合地址
		const baseSubUrl = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
		let 聚合订阅URLs = "";
		let req_data = MainData;
		let 追加UA = 'v2rayn';

		// URL参数强制格式优先级最高
		if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
		else if (forceMihomo) 追加UA = 'clashmeta';
		else if (forceSingBox) 追加UA = 'singbox-v1.14.0';
		else if (forceSurge) 追加UA = 'surge';
		else if (forceQuanX) 追加UA = 'Quantumult%20X';
		else if (forceLoon) 追加UA = 'Loon';

		// 并发拉取所有远程订阅，修复旧版并发超时、内存泄漏
		const subList = [...new Set(urls)].filter(item => item?.trim());
		if (subList.length > 0) {
			const [remoteNodeText, subMergeUrls] = await getSUB(subList, request, 追加UA, userAgentHeader);
			req_data += remoteNodeText.join('\n');
			聚合订阅URLs += subMergeUrls;

			// base64模式预转换合并订阅（修复psub旧版拼接失效）
			if (订阅格式 === 'base64' && !isSubConverterReq && subMergeUrls.includes('://')) {
				const convertParams = new URLSearchParams({
					target: "mixed",
					url: subMergeUrls.replace(/^\|/, ""),
					insert: "false",
					config: subConfig,
					emoji: "true",
					list: "false",
					tfo: "false",
					scv: "true",
					fdn: "false",
					sort: "false",
					new_name: "true"
				});
				const subConverterUrl = `${subProtocol}://${subConverter}/sub?${convertParams.toString()}`;
				try {
					const convertRes = await fetch(subConverterUrl, {
						headers: { 'User-Agent': 'CF-Workers-SUB/Upgrade mihomo/singbox cmliu' },
						signal: AbortSignal.timeout(3000)
					});
					if (convertRes.ok) {
						const b64Raw = await convertRes.text();
						req_data += '\n' + safeB64Decode(b64Raw);
					}
				} catch (err) {
					console.log('预转换base64失败，跳过远程转换', err.message);
				}
			}
		}

		// 拼接Warp节点
		if (env.WARP) {
			const warpLines = await ADD(env.WARP);
			if (warpLines.length > 0) 聚合订阅URLs += "|" + warpLines.join("|");
		}

		// UTF8编码修复中文乱码，全局去重
		const utf8Encoder = new TextEncoder();
		const encodedRaw = utf8Encoder.encode(req_data);
		const utf8Decoder = new TextDecoder("utf-8");
		const cleanText = utf8Decoder.decode(encodedRaw);
		const uniqueLines = new Set(cleanText.split('\n').map(l => l.trim()).filter(Boolean));
		const finalNodeText = [...uniqueLines].join('\n');

		// 安全base64编码兜底（修复旧版btoa中文报错）
		let base64Data;
		try {
			base64Data = btoa(finalNodeText);
		} catch (e) {
			base64Data = safeB64Encode(finalNodeText);
		}

		// 通用响应头，修复流量信息溢出
		const responseHeaders = {
			"content-type": "text/plain; charset=utf-8",
			"Profile-Update-Interval": `${SUBUpdateTime}`,
			"Profile-web-page-url": url.search ? url.origin + url.pathname : request.url,
			"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${byteTotal}; expire=${expire}`
		};

		// Base64模式直接返回
		if (订阅格式 === 'base64' || token === fakeToken) {
			return new Response(base64Data, { headers: responseHeaders });
		}

		// 构建各客户端专属转换链接（升级Mihomo、sing-box v1.8参数）
		let subConverterUrl;
		const mergeUrlParam = encodeURIComponent(聚合订阅URLs.replace(/^\|/, ""));
		const baseConvertQuery = new URLSearchParams({
			url: mergeUrlParam,
			insert: "false",
			config: subConfig,
			emoji: "true",
			list: "false",
			tfo: "false",
			scv: "true",
			fdn: "false",
			sort: "false",
			new_name: "true"
		});

		if (订阅格式 === 'clash') {
			baseConvertQuery.set("target", "clashmeta");
			subConverterUrl = `${subProtocol}://${subConverter}/sub?${baseConvertQuery.toString()}`;
		} else if (订阅格式 === 'singbox') {
			baseConvertQuery.set("target", "singbox");
			baseConvertQuery.set("version", "1.14.0");
			subConverterUrl = `${subProtocol}://${subConverter}/sub?${baseConvertQuery.toString()}`;
		} else if (订阅格式 === 'surge') {
			baseConvertQuery.set("target", "surge");
			baseConvertQuery.set("ver", "4");
			subConverterUrl = `${subProtocol}://${subConverter}/sub?${baseConvertQuery.toString()}`;
		} else if (订阅格式 === 'quanx') {
			baseConvertQuery.set("target", "quanx");
			baseConvertQuery.set("udp", "true");
			subConverterUrl = `${subProtocol}://${subConverter}/sub?${baseConvertQuery.toString()}`;
		} else if (订阅格式 === 'loon') {
			baseConvertQuery.set("target", "loon");
			subConverterUrl = `${subProtocol}://${subConverter}/sub?${baseConvertQuery.toString()}`;
		}

		// 请求转换后端，失败自动降级base64
		try {
			const convertRes = await fetch(subConverterUrl, {
				headers: { 'User-Agent': userAgentHeader },
				signal: AbortSignal.timeout(4000)
			});
			if (!convertRes.ok) throw new Error("转换服务异常");
			// Sing-box 1.14+ 兼容修复
if (订阅格式 === 'singbox') {
	try {
		const config = JSON.parse(convertContent);

		// =========================================================
```js
// =========================================================
// Sing-box 1.14+ DNS 兼容修复
// 注意：不启用 FakeIP，彻底移除旧版 FakeIP 配置
// =========================================================
if (config.dns) {
	const dns = config.dns;

	// ---------- DNS Servers ----------
	if (Array.isArray(dns.servers)) {
		dns.servers = dns.servers
			.map(server => {
				if (!server || typeof server !== 'object') {
					return server;
				}

				// 已经是新版 DNS server，直接保留
				if (typeof server.type === 'string') {
					return server;
				}

				const address = server.address;

				const newServer = {};

				if (server.tag) {
					newServer.tag = server.tag;
				}

				// address_resolver -> domain_resolver
				if (server.address_resolver) {
					newServer.domain_resolver = server.address_resolver;
				}

				// detour 保留
				if (server.detour) {
					newServer.detour = server.detour;
				}

				// -------------------------------------------------
				// 旧版 FakeIP
				//
				// 不转换成新版 type=fakeip
				// 直接删除，避免 198.18.x.x 被错误直连
				// -------------------------------------------------

				// -------------------------------------------------
				// HTTP/3 DNS
				// h3://dns.alidns.com/dns-query
				// -------------------------------------------------
				if (
					typeof address === 'string' &&
					address.startsWith('h3://')
				) {
					const value = address.substring(5);
					const slashIndex = value.indexOf('/');

					let host;
					let path;

					if (slashIndex === -1) {
						host = value;
						path = '/dns-query';
					} else {
						host = value.substring(0, slashIndex);
						path =
							value.substring(slashIndex) ||
							'/dns-query';
					}

					const hostPort = host.split(':');

					newServer.type = 'h3';
					newServer.server = hostPort[0];
					newServer.server_port =
						hostPort[1] ? Number(hostPort[1]) : 443;
					newServer.path = path;

					return newServer;
				}

				// -------------------------------------------------
				// UDP DNS
				// -------------------------------------------------
				if (
					typeof address === 'string' &&
					address.startsWith('udp://')
				) {
					const value = address.substring(6);
					const hostPort = value.split(':');

					newServer.type = 'udp';
					newServer.server = hostPort[0];
					newServer.server_port =
						hostPort[1] ? Number(hostPort[1]) : 53;

					return newServer;
				}

				// -------------------------------------------------
				// TCP DNS
				// -------------------------------------------------
				if (
					typeof address === 'string' &&
					address.startsWith('tcp://')
				) {
					const value = address.substring(6);
					const hostPort = value.split(':');

					newServer.type = 'tcp';
					newServer.server = hostPort[0];
					newServer.server_port =
						hostPort[1] ? Number(hostPort[1]) : 53;

					return newServer;
				}

				// -------------------------------------------------
				// 普通 IP DNS
				// -------------------------------------------------
				if (
					typeof address === 'string' &&
					(
						/^\d{1,3}(\.\d{1,3}){3}$/.test(address) ||
						address.includes(':')
					)
				) {
					newServer.type = 'udp';
					newServer.server = address;
					newServer.server_port = 53;

					return newServer;
				}

				// 未知格式保留
				return server;

			})
			.filter(Boolean);
	}

	// -------------------------------------------------
	// 删除旧版 FakeIP 配置
	// -------------------------------------------------
	if ('fakeip' in dns) {
		delete dns.fakeip;
	}

	// -------------------------------------------------
	// DNS Rules
	// -------------------------------------------------
	if (Array.isArray(dns.rules)) {
		dns.rules = dns.rules
			.filter(rule => {
				if (!rule || typeof rule !== 'object') {
					return false;
				}

				// 删除所有 FakeIP DNS 规则
				if (rule.server === 'dns_fakeip') {
					return false;
				}

				if (
					rule.action === 'route' &&
					rule.server === 'dns_fakeip'
				) {
					return false;
				}

				return true;
			})
			.map(rule => {
				// 已经是新版 action 格式
				if (rule.action) {
					return rule;
				}

				const newRule = { ...rule };

				if (typeof rule.server === 'string') {
					const serverTag = rule.server;

					delete newRule.server;

					// 旧 dns_block / block
					// 改成新版 predefined action
					if (
						serverTag === 'dns_block' ||
						serverTag === 'block'
					) {
						newRule.action = 'predefined';
						newRule.rcode = 'NOERROR';
					} else {
						// 普通 DNS server
						newRule.action = 'route';
						newRule.server = serverTag;
					}
				}

				return newRule;
			});
	}

	// 删除旧 block DNS server
	if (Array.isArray(dns.servers)) {
		dns.servers = dns.servers.filter(server => {
			if (!server || typeof server !== 'object') {
				return true;
			}

			return server.tag !== 'block';
		});
	}

	// 1.14+ 不再使用
	if ('independent_cache' in dns) {
		delete dns.independent_cache;
	}

	config.dns = dns;
}
```

}

			config.dns = dns;
		}

		// =========================================================
		// Sing-box VLESS 兼容修复
		// 某些转换器会把 VLESS 的 ML-KEM encryption
		// 写入 outbound，但新版 sing-box 不支持该字段
		// =========================================================
		if (Array.isArray(config.outbounds)) {
			for (const outbound of config.outbounds) {
				if (
					outbound &&
					outbound.type === 'vless' &&
					typeof outbound.encryption === 'string'
				) {
					delete outbound.encryption;
				}
			}
		}

		convertContent = JSON.stringify(config);

	} catch (e) {
		console.log('Sing-box 1.14+ DNS/VLESS兼容修复失败:', e.message);
	}
}
			// 修复Mihomo wireguard节点缺失dns参数（核心兼容修复）
			if (订阅格式 === 'clash') convertContent = clashMetaWireguardFix(convertContent);

			// 非浏览器下载附件
			if (!userAgent.includes('mozilla')) {
				responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
			}
			return new Response(convertContent, { headers: responseHeaders });
		} catch (err) {
			console.log("订阅转换后端请求失败，降级输出base64", err.message);
			return new Response(base64Data, { headers: responseHeaders });
		}
	}
};

// 文本分行清洗工具
async function ADD(envadd) {
	const clean = envadd.replace(/[\t"'|\r\n]+/g, '\n').replace(/\n+/g, '\n').trim();
	if (!clean) return [];
	return clean.split('\n');
}

// 默认404页面
async function nginx() {
	return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Subscribe 404</title>
	<meta charset="utf-8">
	<style>body{max-width:35em;margin:30px auto;font-family:sans-serif;}</style>
	</head>
	<body>
	<h1>订阅地址错误/无权限访问</h1>
	<p>请核对正确的token订阅链接</p>
	</body>
	</html>`;
}

// TG推送消息，修复IP查询失败、HTML转义
async function sendMessage(type, ip, add_data = "") {
	if (!BotToken || !ChatID) return;
	let ipInfoText = `IP: ${ip}\n`;
	try {
		const ipRes = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`, { signal: AbortSignal.timeout(2000) });
		if (ipRes.ok) {
			const ipJson = await ipRes.json();
			ipInfoText += `国家: ${ipJson.country || "未知"}\n城市: ${ipJson.city || "未知"}\n运营商: ${ipJson.org || "未知"}\nASN: ${ipJson.as || "未知"}\n`;
		}
	} catch {}
	const fullMsg = `${type}\n${ipInfoText}<tg-spoiler>${add_data}</tg-spoiler>`;
	const tgUrl = `https://api.telegram.org/bot${BotToken}/sendMessage?chat_id=${ChatID}&parse_mode=HTML&text=${encodeURIComponent(fullMsg)}`;
	return fetch(tgUrl, {
		method: "GET",
		headers: {
			"User-Agent": "CF-Workers-SUB-TG-Push",
			"Accept": "text/html"
		},
		signal: AbortSignal.timeout(3000)
	});
}

// 双重MD5签名生成
async function MD5MD5(text) {
	const enc = new TextEncoder();
	const firstHash = await crypto.subtle.digest("MD5", enc.encode(text));
	const firstHex = Array.from(new Uint8Array(firstHash)).map(b => b.toString(16).padStart(2, "0")).join("");
	const sliceStr = firstHex.slice(7, 27);
	const secondHash = await crypto.subtle.digest("MD5", enc.encode(sliceStr));
	return Array.from(new Uint8Array(secondHash)).map(b => b.toString(16).padStart(2, "0")).join("").toLowerCase();
}

// Clash Meta Wireguard 节点修复（新版Mihomo强制需要remote-dns-resolve）
function clashMetaWireguardFix(content) {
	if (!content.includes("wireguard")) return content;
	const lines = content.split(/\r?\n/);
	const output = [];
	for (const line of lines) {
		if (line.includes("type: wireguard") && !line.includes("remote-dns-resolve")) {
			const fixed = line.replace(/,\s*mtu: 1280, udp: true/g, ", mtu: 1280, remote-dns-resolve: true, udp: true");
			output.push(fixed);
		} else {
			output.push(line);
		}
	}
	return output.join("\n");
}

// 反向代理跳转
async function proxyURL(proxyRaw, originReqUrl) {
	const urlList = await ADD(proxyRaw);
	const targetBase = new URL(urlList[Math.floor(Math.random() * urlList.length)]);
	let targetPath = targetBase.pathname;
	if (targetPath.endsWith("/")) targetPath = targetPath.slice(0, -1);
	const newFullUrl = `${targetBase.protocol}//${targetBase.host}${targetPath}${originReqUrl.pathname}${originReqUrl.search}`;
	const res = await fetch(newFullUrl);
	const newHeaders = new Headers(res.headers);
	newHeaders.set("X-Proxied-Target", newFullUrl);
	return new Response(res.body, { status: res.status, statusText: res.statusText, headers: newHeaders });
}

// 批量拉取远程订阅，修复并发超时、内存泄漏、格式识别
async function getSUB(apiList, req, appendUA, rawUA) {
	if (!apiList || apiList.length === 0) return [[], ""];
	const uniqueApis = [...new Set(apiList.map(u => u.trim()).filter(Boolean))];
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), 2500);
	const fetchTasks = uniqueApis.map(url => getSingleSub(req, url, appendUA, rawUA, controller.signal));
	const results = await Promise.allSettled(fetchTasks);
	clearTimeout(timer);

	let plainNodeText = "";
	let subMergeUrls = "";
	let errorNodes = "";

	for (const resItem of results) {
		if (resItem.status !== "fulfilled") continue;
		const { url, body, ok } = resItem.value;
		if (!ok) {
			// 异常订阅生成占位节点，不中断整个订阅
			const errLink = `trojan://SUBERR@127.0.0.1:9999?security=tls&allowInsecure=1&type=tcp#订阅异常-${new URL(url).hostname}`;
			errorNodes += errLink + "\n";
			continue;
		}
		// 识别订阅类型
		if (body.includes("proxies:")) {
			subMergeUrls += "|" + url;
		} else if (body.includes('"outbounds"') && body.includes('"inbounds"')) {
			subMergeUrls += "|" + url;
		} else if (isValidBase64(body)) {
			plainNodeText += safeB64Decode(body) + "\n";
		} else if (body.includes("://")) {
			plainNodeText += body + "\n";
		} else {
			const errLink = `trojan://SUBERR@127.0.0.1:9999?security=tls&allowInsecure=1&type=tcp#未知订阅-${new URL(url).hostname}`;
			errorNodes += errLink + "\n";
		}
	}
	const finalNodes = await ADD(plainNodeText + errorNodes);
	return [finalNodes, subMergeUrls];
}

// 单个订阅拉取请求
async function getSingleSub(req, targetUrl, appendUA, rawUA, signal) {
	const newHeaders = new Headers(req.headers);
	newHeaders.set("User-Agent", `v2rayN/6.45 CF-Workers-SUB-Upgrade ${appendUA}(${rawUA})`);
	const subReq = new Request(targetUrl, {
		method: req.method,
		headers: newHeaders,
		body: req.method === "GET" ? null : req.body,
		redirect: "follow",
		signal,
		cf: { insecureSkipVerify: true, allowUntrusted: true, validateCertificate: false }
	});
	const resp = await fetch(subReq);
	const body = resp.ok ? await resp.text() : "";
	return { url: targetUrl, ok: resp.ok, body };
}

// Base64格式校验
function isValidBase64(str) {
	const clean = str.replace(/\s/g, "");
	return /^[A-Za-z0-9+/=]+$/.test(clean);
}

// 安全Base64解码（兼容中文，修复旧版atob乱码）
function safeB64Decode(b64Str) {
	try {
		const raw = atob(b64Str.replace(/\s/g, ""));
		const buf = Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
		return new TextDecoder("utf-8").decode(buf);
	} catch (e) {
		return "";
	}
}

// 安全Base64编码兜底（修复原生btoa中文报错）
function safeB64Encode(text) {
	const buf = new TextEncoder().encode(text);
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	let out = "";
	for (let i = 0; i < buf.length; i += 3) {
		const b1 = buf[i];
		const b2 = buf[i + 1] ?? 0;
		const b3 = buf[i + 2] ?? 0;
		out += chars[b1 >> 2];
		out += chars[((b1 & 3) << 4) | (b2 >> 4)];
		out += chars[((b2 & 15) << 2) | (b3 >> 6)];
		out += chars[b3 & 63];
	}
	const padLen = (3 - (buf.length % 3)) % 3;
	return out.slice(0, out.length - padLen) + "=".repeat(padLen);
}

// KV旧数据迁移兼容
async function 迁移地址列表(env, txtName = "LINK.txt") {
	const oldPath = `/${txtName}`;
	const oldData = await env.KV.get(oldPath);
	const newData = await env.KV.get(txtName);
	if (oldData && !newData) {
		await env.KV.put(txtName, oldData);
		await env.KV.delete(oldPath);
		return true;
	}
	return false;
}

// KV在线编辑面板完整逻辑
async function KV(request, env, txt = "LINK.txt", guest) {
	const url = new URL(request.url);
	// POST保存节点列表
	if (request.method === "POST") {
		if (!env.KV) return new Response("未绑定KV命名空间，变量名KV", { status: 400 });
		try {
			const content = await request.text();
			await env.KV.put(txt, content);
			return new Response("保存成功！");
		} catch (err) {
			return new Response(`保存失败: ${err.message}`, { status: 500 });
		}
	}
	// GET渲染管理页面
	let kvContent = "";
	let hasKV = !!env.KV;
	if (hasKV) {
		try {
			kvContent = await env.KV.get(txt) || "";
		} catch (e) {
			kvContent = `KV读取失败：${e.message}`;
		}
	}
	const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${FileName} 订阅管理面板</title>
<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{padding:16px;font-family:system-ui, sans-serif;font-size:14px;line-height:1.6;}
.block{margin:16px 0;padding:12px;border:1px solid #eee;border-radius:8px;}
h3{margin-bottom:10px;color:#222;}
a{color:#0066cc;text-decoration:underline;cursor:pointer;}
textarea{width:100%;min-height:320px;padding:10px;border:1px solid #ccc;border-radius:6px;margin:10px 0;font-family:monospace;font-size:13px;}
.btns{display:flex;gap:12px;align-items:center;margin:8px 0;}
button{padding:6px 16px;border:none;border-radius:6px;cursor:pointer;font-size:14px;}
.save{background:#28a745;color:#fff;}
.save:disabled{opacity:0.6;cursor:not-allowed;}
.back{background:#6c757d;color:#fff;}
.tip{color:#666;margin:4px 0;}
.qr-box{margin:8px 0;}
.guest-box{margin-top:10px;padding:10px;background:#f8f9fa;border-radius:6px;}
</style>
</head>
<body>
<div class="block">
<h3>主订阅链接（管理员）</h3>
<div class="tip">自适应订阅：<a onclick="copyQr('https://${url.hostname}/${mytoken}','qr0')">https://${url.hostname}/${mytoken}</a></div>
<div id="qr0" class="qr-box"></div>
<div class="tip">Base64订阅：<a onclick="copyQr('https://${url.hostname}/${mytoken}?b64','qr1')">https://${url.hostname}/${mytoken}?b64</a></div>
<div id="qr1" class="qr-box"></div>
<div class="tip">Mihomo/Clash：<a onclick="copyQr('https://${url.hostname}/${mytoken}?clash','qr2')">https://${url.hostname}/${mytoken}?clash</a></div>
<div id="qr2" class="qr-box"></div>
<div class="tip">Sing-box新版：<a onclick="copyQr('https://${url.hostname}/${mytoken}?sb','qr3')">https://${url.hostname}/${mytoken}?sb</a></div>
<div id="qr3" class="qr-box"></div>
<div class="tip">Surge：<a onclick="copyQr('https://${url.hostname}/${mytoken}?surge','qr4')">https://${url.hostname}/${mytoken}?surge</a></div>
<div id="qr4" class="qr-box"></div>
<div class="tip">Loon：<a onclick="copyQr('https://${url.hostname}/${mytoken}?loon','qr5')">https://${url.hostname}/${mytoken}?loon</a></div>
<div id="qr5" class="qr-box"></div>
</div>

<div class="block guest-box">
<h3>访客订阅（仅读取，无编辑权限）</h3>
<div class="tip">访客Token：<strong>${guest}</strong></div>
<div class="tip">自适应：<a onclick="copyQr('https://${url.hostname}/sub?token=${guest}','g0')">https://${url.hostname}/sub?token=${guest}</a></div>
<div id="g0" class="qr-box"></div>
<div class="tip">Mihomo：<a onclick="copyQr('https://${url.hostname}/sub?token=${guest}&clash','g1')">https://${url.hostname}/sub?token=${guest}&clash</a></div>
<div id="g1" class="qr-box"></div>
<div class="tip">Sing-box：<a onclick="copyQr('https://${url.hostname}/sub?token=${guest}&sb','g2')">https://${url.hostname}/sub?token=${guest}&sb</a></div>
<div id="g2" class="qr-box"></div>
</div>

<div class="block">
<h3>节点列表编辑（一行一个节点/远程订阅链接）</h3>
${hasKV ? \`
<textarea id="nodeText">${kvContent}</textarea>
<div class="btns">
<button class="save" id="saveBtn" onclick="saveNodes()">保存配置</button>
<button class="back" onclick="history.back()">返回</button>
<span id="saveTip" class="tip"></span>
</div>
<p class="tip">支持vless/vmess/trojan/ss/ssr/wireguard明文节点、http远程订阅链接</p>
\` : "<p>请在Worker变量绑定命名空间：变量名 KV</p>"}
</div>

<div class="block">
<h3>当前配置信息</h3>
<div class="tip">转换后端：${subProtocol}://${subConverter}</div>
<div class="tip">转换配置模板：${subConfig}</div>
<div class="tip">订阅更新间隔：${SUBUpdateTime} 小时</div>
</div>

<script>
// 复制链接并生成二维码
function copyQr(link, qrid){
	navigator.clipboard.writeText(link).then(()=>alert("链接已复制！"));
	const box = document.getElementById(qrid);
	box.innerHTML = "";
	new QRCode(box, {text:link, width:180, height:180, correctLevel:QRCode.CorrectLevel.M});
}

// 保存节点列表
async function saveNodes(){
	const btn = document.getElementById("saveBtn");
	const tip = document.getElementById("saveTip");
	const text = document.getElementById("nodeText").value;
	btn.disabled = true;
	btn.innerText = "保存中...";
	tip.innerText = "";
	try{
		const res = await fetch(window.location.href, {
			method:"POST",
			body:text,
			headers:{"Content-Type":"text/plain;charset=utf-8"}
		});
		const msg = await res.text();
		tip.style.color = "#28a745";
		tip.innerText = "✅ " + msg + " " + new Date().toLocaleString();
		document.title = "已保存 - ${FileName}";
	}catch(err){
		tip.style.color = "#dc3545";
		tip.innerText = "❌ 保存失败：" + err.message;
	}finally{
		btn.disabled = false;
		btn.innerText = "保存配置";
	}
}
</script>
</body>
</html>`;
	return new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8" } });
}
