// CF-Workers-SUB 安全优化版｜移除TG用户IP/地理位置隐私上报
let defaultMytoken = 'ljf&rogerIPOOLGO';
let defaultGuestToken = '';
let defaultBotToken = '';
let defaultChatID = '';
let defaultTG = 0;
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6;
let totalTrafficTB = 99;
let expireTimestamp = 4102329600000;//2099-12-31
let defaultMainData = `
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
let defaultSubConverter = "SUBAPI.cmliussss.net";
let defaultSubConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini";
let defaultSubProtocol = 'https';

export default {
	async fetch(request, env, ctx) {
		// 局部变量隔离并发，杜绝全局污染
		const mytoken = env.TOKEN || defaultMytoken;
		const BotToken = env.TGTOKEN || defaultBotToken;
		const ChatID = env.TGID || defaultChatID;
		const TG = env.TG ?? defaultTG;
		let subConverter = env.SUBAPI || defaultSubConverter;
		const subConfig = env.SUBCONFIG || defaultSubConfig;
		const FileNameLocal = env.SUBNAME || FileName;
		const SUBUpdateTimeLocal = env.SUBUPTIME || SUBUpdateTime;
		let subProtocol = defaultSubProtocol;

		// 未配置自定义TOKEN，直接拒绝访问，消除硬编码密钥风险
		if (!env.TOKEN) {
			return new Response("未配置环境变量TOKEN，禁止访问", { status: 403 });
		}

		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');

		// 处理subConverter协议
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		let guestToken = env.GUESTTOKEN || env.GUEST || defaultGuestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const guestSubToken = guestToken;

		// 流量计算修复：先换算字节再计算剩余
		const totalByte = totalTrafficTB * 1099511627776;
		const nowMs = Date.now();
		const remainRatio = (expireTimestamp - nowMs) / expireTimestamp;
		const fakeUsed = Math.floor((remainRatio * totalByte) / 2);
		const expireSec = Math.floor(expireTimestamp / 1000);

		// 鉴权判断：修复访客路径绕过漏洞
		const validTokens = [mytoken, fakeToken, guestSubToken];
		const isPathAdmin = url.pathname === `/${mytoken}` || url.pathname.includes(`/${mytoken}?`);
		const isGuestPath = url.pathname === `/${guestSubToken}` || url.pathname.includes(`/${guestSubToken}?`);
		const authPass = validTokens.includes(token) || isPathAdmin;

		// 无权限访问分支
		if (!authPass) {
			// TG推送仅上报基础信息，完全移除IP/地理位置隐私
			if (TG === 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") {
				// 异步后台推送，不阻塞主请求
				ctx.waitUntil(safeSendTG(BotToken, ChatID, `#异常访问 ${FileNameLocal}`, userAgentHeader, url));
			}
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		}

		// 访客禁止访问编辑页面
		if (isGuestPath || token === guestSubToken) {
			if (userAgent.includes('mozilla') && !url.search) {
				return new Response("访客无编辑权限", { status: 403 });
			}
		}

		let MainData = defaultMainData;
		let urls = [];
		if (env.KV) {
			await migrateLinkList(env, 'LINK.txt');
			// 管理员浏览器访问编辑页
			if (userAgent.includes('mozilla') && !url.search && authPass && !isGuestPath) {
				ctx.waitUntil(safeSendTG(BotToken, ChatID, `#编辑订阅 ${FileNameLocal}`, userAgentHeader, url));
				return await KVPage(request, env, 'LINK.txt', guestSubToken, mytoken, subConverter, subProtocol, subConfig, FileNameLocal);
			} else {
				MainData = await env.KV.get('LINK.txt') || MainData;
			}
		} else {
			MainData = env.LINK || MainData;
			if (env.LINKSUB) urls = await ADD(env.LINKSUB);
		}

		// 合并所有节点链接
		const allMergedLinks = await ADD(MainData + '\n' + urls.join('\n'));
		let localNodes = "";
		let subUrlsRaw = "";
		for (let x of allMergedLinks) {
			const trimX = x.trim();
			if (!trimX) continue;
			if (trimX.toLowerCase().startsWith('http')) {
				subUrlsRaw += trimX + '\n';
			} else {
				localNodes += trimX + '\n';
			}
		}
		MainData = localNodes;
		const subUrlList = await ADD(subUrlsRaw);

		// 合法订阅访问TG推送（脱敏无IP）
		ctx.waitUntil(safeSendTG(BotToken, ChatID, `#获取订阅 ${FileNameLocal}`, userAgentHeader, url));

		const isSubConverterRequest = request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || userAgent.includes('subconverter');
		let subTarget = 'base64';
		if (!(userAgent.includes('null') || isSubConverterRequest || userAgent.includes('nekobox') || userAgent.includes(FileNameLocal.toLowerCase()))) {
			if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
				subTarget = 'singbox';
			} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
				subTarget = 'surge';
			} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
				subTarget = 'quanx';
			} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
				subTarget = 'loon';
			} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
				subTarget = 'clash';
			}
		}

		let convertUrlSource = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
		let req_data = MainData;
		let uaSuffix = 'v2rayn';

		// url参数强制指定格式
		if (url.searchParams.has('b64') || url.searchParams.has('base64')) subTarget = 'base64';
		else if (url.searchParams.has('clash')) uaSuffix = 'clash';
		else if (url.searchParams.has('singbox')) uaSuffix = 'singbox';
		else if (url.searchParams.has('surge')) uaSuffix = 'surge';
		else if (url.searchParams.has('quanx')) uaSuffix = 'Quantumult%20X';
		else if (url.searchParams.has('loon')) uaSuffix = 'Loon';

		const uniqueSubUrls = [...new Set(subUrlList)].filter(item => item?.trim?.());
		let convertSourceUrls = "";
		if (uniqueSubUrls.length > 0) {
			// 拉取第三方订阅，携带超时signal
			const subFetchResult = await getSUB(uniqueSubUrls, request, uaSuffix, userAgentHeader);
			req_data += subFetchResult[0].join('\n');
			convertSourceUrls += subFetchResult[1];
			if (subTarget == 'base64' && !isSubConverterRequest && convertSourceUrls.includes('://')) {
				const converterApiUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(convertSourceUrls)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
				try {
					const subConverterResponse = await fetch(converterApiUrl, { headers: { 'User-Agent': 'v2rayN/CF-Workers-SUB (https://github.com/cmliu/CF-Workers-SUB)' }, signal: AbortSignal.timeout(3000) });
					if (subConverterResponse.ok) {
						const subConverterContent = await subConverterResponse.text();
						req_data += '\n' + safeAtob(subConverterContent);
					}
				} catch (error) {
					console.log('订阅转换base64失败，检查后端可用性');
				}
			}
		}
		if (env.WARP) convertSourceUrls += "|" + (await ADD(env.WARP)).join("|");

		// 去重 + UTF8安全处理
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const utf8Decoder = new TextDecoder();
		const textRaw = utf8Decoder.decode(encodedData);
		const uniqueLines = new Set(textRaw.split('\n'));
		const finalText = [...uniqueLines].join('\n');

		// 安全Base64编码（修复中文乱码）
		let base64Data;
		try {
			base64Data = btoa(unescape(encodeURIComponent(finalText)));
		} catch (e) {
			base64Data = utf8ToBase64(finalText);
		}

		// 响应头
		const responseHeaders = {
			"content-type": "text/plain; charset=utf-8",
			"Profile-Update-Interval": `${SUBUpdateTimeLocal}`,
			"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
			"Subscription-Userinfo": `upload=${fakeUsed}; download=${fakeUsed}; total=${totalByte}; expire=${expireSec}`,
		};

		// base64格式直接返回
		if (subTarget == 'base64' || token == fakeToken) {
			return new Response(base64Data, { headers: responseHeaders });
		}

		// 构建对应客户端转换链接
		let converterTargetUrl = "";
		const fullConvertSource = convertUrlSource + convertSourceUrls;
		const baseConvertParams = `&url=${encodeURIComponent(fullConvertSource)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
		if (subTarget == 'clash') {
			converterTargetUrl = `${subProtocol}://${subConverter}/sub?target=clash${baseConvertParams}`;
		} else if (subTarget == 'singbox') {
			converterTargetUrl = `${subProtocol}://${subConverter}/sub?target=singbox${baseConvertParams}`;
		} else if (subTarget == 'surge') {
			converterTargetUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4${baseConvertParams}`;
		} else if (subTarget == 'quanx') {
			converterTargetUrl = `${subProtocol}://${subConverter}/sub?target=quanx&udp=true${baseConvertParams}`;
		} else if (subTarget == 'loon') {
			converterTargetUrl = `${subProtocol}://${subConverter}/sub?target=loon${baseConvertParams}`;
		}

		try {
			const subConverterResponse = await fetch(converterTargetUrl, {
				headers: { 'User-Agent': userAgentHeader },
				signal: AbortSignal.timeout(3000)
			});
			if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
			let subConverterContent = await subConverterResponse.text();
			if (subTarget == 'clash') subConverterContent = clashFix(subConverterContent);
			if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileNameLocal)}`;
			return new Response(subConverterContent, { headers: responseHeaders });
		} catch (error) {
			return new Response(base64Data, { headers: responseHeaders });
		}
	}
};

// ========== 工具函数 ==========
/**
 * 安全TG推送：移除所有IP、地理位置隐私，仅推送基础访问信息
 */
async function safeSendTG(BotToken, ChatID, type, ua, reqUrl) {
	if (!BotToken || !ChatID) return;
	try {
		const urlObj = new URL(reqUrl);
		const msg = `${type}\nUA: ${ua}\n域名: ${urlObj.hostname}\n访问路径: ${urlObj.pathname}${urlObj.search}`;
		const tgApi = `https://api.telegram.org/bot${BotToken}/sendMessage?chat_id=${ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`;
		await fetch(tgApi, {
			method: 'GET',
			signal: AbortSignal.timeout(2000),
			headers: {
				'User-Agent': 'CF-Workers-SUB SafeTG'
			}
		});
	} catch (err) {
		console.log("TG推送失败", err.message);
	}
}

/** 文本分割清洗 */
async function ADD(envadd) {
	let addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');
	if (addtext.startsWith('\n')) addtext = addtext.slice(1);
	if (addtext.endsWith('\n')) addtext = addtext.slice(0, -1);
	return addtext.split('\n');
}

/** 403默认nginx页面 */
async function nginx() {
	return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>body{width:35em;margin:0 auto;font-family:Tahoma,Verdana,Arial,sans-serif;}</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and working. Further configuration is required.</p>
	<p>For online documentation and support please refer to <a href="http://nginx.org/">nginx.org</a>.<br/>Commercial support is available at <a href="http://nginx.com/">nginx.com</a>.</p>
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`;
}

/** MD5双重哈希 */
async function MD5MD5(text) {
	const encoder = new TextEncoder();
	const firstBuf = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstHex = Array.from(new Uint8Array(firstBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
	const sliceStr = firstHex.slice(7, 27);
	const secondBuf = await crypto.subtle.digest('MD5', encoder.encode(sliceStr));
	const secondHex = Array.from(new Uint8Array(secondBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
	return secondHex.toLowerCase();
}

/** Clash WireGuard修复 */
function clashFix(content) {
	if (!content.includes('wireguard')) return content;
	const lines = content.split(/\r?\n/);
	let res = "";
	for (const line of lines) {
		if (line.includes('type: wireguard') && line.includes('mtu: 1280, udp: true') && !line.includes('remote-dns-resolve')) {
			res += line.replace(', mtu: 1280, udp: true', ', mtu: 1280, remote-dns-resolve: true, udp: true') + '\n';
		} else {
			res += line + '\n';
		}
	}
	return res;
}

/** 反向代理跳转 */
async function proxyURL(proxyURL, url) {
	const urls = await ADD(proxyURL);
	const targetRaw = urls[Math.floor(Math.random() * urls.length)];
	const parsed = new URL(targetRaw);
	let path = parsed.pathname;
	if (path.endsWith('/')) path = path.slice(0, -1);
	const newFullUrl = `${parsed.protocol}//${parsed.hostname}${path}${url.pathname}${url.search}`;
	const resp = await fetch(newFullUrl, { signal: AbortSignal.timeout(3000) });
	const newResp = new Response(resp.body, resp);
	newResp.headers.set('X-New-URL', newFullUrl);
	return newResp;
}

/** 批量拉取第三方订阅，携带超时signal｜修复res.input不存在bug */
async function getSUB(apiList, request, uaSuffix, userAgentHeader) {
	if (!apiList || apiList.length === 0) return [[], ""];
	const uniqueApi = [...new Set(apiList)].filter(i => i.trim());
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), 2000);
	let plainNodes = "";
	let convertLinks = "";
	try {
		const tasks = uniqueApi.map((u, idx) => getUrl(u, request, uaSuffix, userAgentHeader, controller.signal).then(txt=>{
			return {text: txt, url: u}
		}));
		const results = await Promise.allSettled(tasks);
		for (const res of results) {
			if (res.status !== 'fulfilled') continue;
			const {text, url} = res.value;
			const textTrim = text.trim();
			if (!textTrim) continue;
			if (textTrim.includes('proxies:') || textTrim.includes('"outbounds"')) {
				convertLinks += "|" + url;
			} else if (textTrim.includes('://')) {
				plainNodes += textTrim + '\n';
			} else if (isValidBase64(textTrim)) {
				plainNodes += safeAtob(textTrim) + '\n';
			}
		}
	} catch (e) {
		console.log("批量订阅拉取异常", e);
	} finally {
		clearTimeout(timer);
	}
	return [await ADD(plainNodes), convertLinks];
}

/** 单个订阅请求，移除无效cf证书配置，携带超时signal */
async function getUrl(targetUrl, request, uaSuffix, userAgentHeader, signal) {
	const newHeaders = new Headers(request.headers);
	const baseUA = atob('djJyYXlOLzYuNDU=');
	newHeaders.set("User-Agent", `${baseUA} cmliu/CF-Workers-SUB ${uaSuffix}(${userAgentHeader})`);
	const req = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		signal
	});
	const resp = await fetch(req);
	if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
	return await resp.text();
}

/** Base64合法性校验 */
function isValidBase64(str) {
	const clean = str.replace(/\s/g, '');
	return /^[A-Za-z0-9+/=]+$/.test(clean);
}

/** 安全解码base64 */
function safeAtob(str) {
	try {
		return decodeURIComponent(escape(atob(str)));
	} catch (e) {
		return str;
	}
}

/** UTF8安全Base64编码，解决中文乱码 */
function utf8ToBase64(str) {
	const bytes = new TextEncoder().encode(str);
	let b64 = "";
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (let i = 0; i < bytes.length; i += 3) {
		const b1 = bytes[i];
		const b2 = bytes[i + 1] ?? 0;
		const b3 = bytes[i + 2] ?? 0;
		b64 += chars[b1 >> 2];
		b64 += chars[((b1 & 3) << 4) | (b2 >> 4)];
		b64 += chars[((b2 & 15) << 2) | (b3 >> 6)];
		b64 += chars[b3 & 63];
	}
	const pad = (3 - (bytes.length % 3)) % 3;
	return b64.slice(0, b64.length - pad) + "=".repeat(pad);
}

/** KV数据迁移，避免重复读写 */
async function migrateLinkList(env, txtName) {
	const oldKey = `/${txtName}`;
	const newKey = txtName;
	const oldData = await env.KV.get(oldKey);
	const newData = await env.KV.get(newKey);
	if (oldData && !newData) {
		await env.KV.put(newKey, oldData);
		await env.KV.delete(oldKey);
	}
}

/** KV编辑页面（移除隐私相关展示，增加简易CSRF校验） */
async function KVPage(request, env, txt, guestToken, adminToken, subConverter, subProtocol, subConfig, subName) {
	const url = new URL(request.url);
	// 简易CSRF防护：仅同源/携带token允许POST
	if (request.method === "POST") {
		if (!env.KV) return new Response("未绑定KV命名空间", { status: 400 });
		const originToken = url.pathname.includes(adminToken);
		if (!originToken) return new Response("非法提交，CSRF拦截", { status: 403 });
		try {
			const content = await request.text();
			await env.KV.put(txt, content);
			return new Response("保存成功");
		} catch (e) {
			return new Response("保存失败:" + e.message, { status: 500 });
		}
	}
	let content = "";
	if (env.KV) content = await env.KV.get(txt) || "";
	const html = `
<!DOCTYPE html>
<html>
<head>
<title>${subName} 订阅编辑</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{margin:0;padding:15px;box-sizing:border-box;font-size:13px;}
.editor{width:100%;height:300px;margin:15px 0;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:13px;line-height:1.5;resize:none;}
.save-box{display:flex;gap:10px;align-items:center;}
.save-btn{background:#4CAF50;color:#fff;border:none;padding:6px 15px;border-radius:4px;cursor:pointer;}
.back-btn{background:#666;color:#fff;border:none;padding:6px 15px;border-radius:4px;cursor:pointer;}
</style>
<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
</head>
<body>
<h3>订阅链接</h3>
<div>自适应：<a href="javascript:copy('https://${url.hostname}/${adminToken}')">https://${url.hostname}/${adminToken}</a><div id="q0"></div></div>
<div>Base64：<a href="javascript:copy('https://${url.hostname}/${adminToken}?b64')">https://${url.hostname}/${adminToken}?b64</a><div id="q1"></div></div>
<div>Clash：<a href="javascript:copy('https://${url.hostname}/${adminToken}?clash')">https://${url.hostname}/${adminToken}?clash</a><div id="q2"></div></div>
<div>Singbox：<a href="javascript:copy('https://${url.hostname}/${adminToken}?sb')">https://${url.hostname}/${adminToken}?sb</a><div id="q3"></div></div>
<h4>访客订阅token：${guestToken}（仅订阅，不可编辑）</h4>
<h3>节点编辑</h3>
<textarea id="content" class="editor" placeholder="一行一个节点/订阅链接">${content}</textarea>
<div class="save-box">
<button class="save-btn" onclick="save()">保存</button>
<span id="status"></span>
</div>
<script>
function copy(text){
	navigator.clipboard.writeText(text);
	alert("已复制");
}
async function save(){
	const t = document.getElementById('content').value;
	const res = await fetch(location.href,{method:'POST',body:t});
	document.getElementById('status').innerText = await res.text();
}
</script>
</body>
</html>
`;
	return new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8" } });
}
