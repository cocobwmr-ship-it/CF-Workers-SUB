
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
vless://85fb4c59-c6c2-40ad-b4a2-286cf1e23101@de.yienergysmarthome.com:37158?encryption=none&security=reality&sni=apple.com&fp=chrome&pbk=AGsf81wQW0VEew_OL-IcKclLWrDvmm02v562I5mCegA&sid=598f011e&pqv=ivWMao4k2QtWzPuowPDgQ-0jiDhGWVK9k4pDxsK9-e5LtQLHL2sgwNRvJj4ajQNCkGP4eq0ruZaWKU9ohoXgF-5lmfdRCuBOgddJ9JREGv3jZeEiD_ikKaFuOvtEJ5P2CVwk8eepEO1o0zucj0Yh-sucK_1lFWo_SlFVI5ZH2Pzx3Q0k9_dnFJnF2EtKjJ62bjSe7tICTHUAGV6f6-xtfeQKHl2nvis03tcwop9Ms7k-mpryfLY68UCvwqvLLE805SwWUOLSun5SRS6_sLA-0vKjzRLkwbXWcBdPZD0v6fBLcPKCW8MkfkdBMvAOwa4a3imQEoQ6SPqv5z7P5NMXBVw8BAYpEGJUWKXvv5dcYvRba6pWXdUayPvbxQGrYVreYBkLjELp9IYMKRMdzt6W_JOY-9_3l4NX6m3bd04HOB80z_Mhw-GhqN7bFTOxFNf0q-Gs_UwCKj1ShAUaavVZPtY3Ta784RKStvhXCL-27WUVUb7VqHT4DZCXkwQmlrTPx-olbJb5tbXjLLQADRPeE1L7tNaOLkeIC1y2ujHZTeL6X45_tdFBF2AdHrKkQ1HN5dI2lm-Cq37Zk1lG2chdu6Sj9708NCd0FgK62pCpJ7hj_pfPP1QJ5mQz8YNTb_g9icw97ITir9oU8BrpzzLsY_0tWdmIZ-z0CBEvmzS4y2WFRHbAg1Tfy-Hm9L8SGy50BJDuXI8ihzikZd6fi5MpW8hnhwPFSDR48KPwhEGUQwtybEluu-DiQdj5uCU04g97soXZZ9c_7gIyDU6jqfk63LJiTxwlqT7SyOaguN4e8fo2Bsh6hJWE5IKLdl6PX2jsEWmHuZmLmQE8um7wXxfGmBAPiIua93Qb3CU0hGk-jv0KI0-HyaOGcjLw-MAZYspc2gXrttBMiqbR6_F5tEs7EEe8ocMV-ILPJzwIUGDq064M22b2kKp3HG9mUT8gt_xN0cuTjtd3WS6GWWEtpOyEJ5jYW-3Sz3Dff0eeR6yIaiRR8b53U8XSWJ97nNQN_nzkPLY7poDB496gAH4H0_YEr21KdCZ3nwOync8HnwJvmIDuJyqyXHQi1mKvwhbgssS7U_HjLJIYKxbncmkt30t9D0rM1PIYpNLolvrduXPv5kQc_2U3fqBcMELQOzcmCWTalhFQShWv5UhetmRWkLBV2ggoON7hIeG1zrcPswATlat9QT4zrMdCvPSwvufYNh7c9fj4S1vjh0kQIb_B7WZzoCcbKPw_V04OR0Mt8GfKY3VhjTHg_NH1mFRgdcsH98dUpQw7kIuADDL2ecIdMZ8XKHN2520uGpOGYeFvPgYeaNwWwQYeolOF1pD8NuYK3Luyt27KXKoNo9qNQhWwesl2tMwC6PQtFKTSb99KseLC9y5MdH7b4rAhZYCwQSW2pju2mkUxPEP1SZ42zppvgfBFhNf02engPPvirmXstT5bIN7N0Qkh9-CpoLiH_2ZCeYykw365vnHwMH1AuikGhKo8wwweh6qEGJW9bn3ZC4Y6ctBvdyaHzQX1pjvCVP4ac0hVrxv6XCz2ISCC1Qw5WuvGCV_uJsnEkTdcELZMz8_bB-P997ugQefsZqoBp0aHrNkavGLA7sWyqZxnvLFHbLRsE7-ZuH0hZNepmyG69V84D97ZAIuzEnsYXlVHxwfv-ShgDwshEsG5vGzpC5_SXUsKUadLxY55-kJbw7CeROk9BYloMbPIHa_0SqpQ5CO5Y5SDxsJhGOU88_BFt-Bw56A3U8kGO5kcShAsD-rzp1d00W6VhrLputJl0hW0hWMXW6jcFZI_b7HjK7K8ksECDJA711noiGJJTHTomx_Jfk4tLFptpaca1K3Ox9w1sDvfm6NcdBDjHtgCUptbqTc4ZCgtFk7oE9J9jvKeuB3LSUYVM9qI3NwFyY1E8dE87kyi6PTOx80SLSeM6WWJXDonGf3MT9iF0qQglgxPmT5Y_AHGyT_weZkSWDtSAgMHqprNZ2S6JPh2XU-JGlfm2mI4cTJ60qAtxvl2Ie_TVd98QF7gAuj9xoY3JDlDnDC_v1AuZSzGLXksUdltqFHoj-n2YvaGyiL6lKhgetI9xB3ey42Gy9uMQLL7lOnZPRC7UaXW4upVNQitzssjNLYws1Zk3RBI7voXYTS-WYrDVT2egbKCA3sjxHKrOxXnYaCNNmtFFXy-IQDNZwyoLFpNee41MhQ1P2SNl7M0IegUV8Gyq2jzEwTDOYtLNtOop5d663G3m7Apr9j5wQrft5aBHAWS7oJhUwTYj_M1y9t7cXAFKjmvu7ju7HWPymnXIWZSuCSCcgKPxBF6c75xOb_9EEAZf8e6aJHUdD3mX5j5lFfAkRO8JFUsYzi_Gq7zxBUJh01qOgIoNALAp94v47UhCVdYUhi9awfHHNoT_WwZ4yWuBvJ2jh4UjLGwLw1RJP7jeboF9oPYZZUSN6wRaIY9OCgrZAYvcSRD4QRfiaUCCU3nc4QIAVyP8757RjL5lDs9oCzJS9pT16_NvzNoZhNBLLvbDQaZtTAnAWhSnkEjPSgRdJv4G8AImvPKnKLNGW_GJL2f5RmVw7Brwz0g86p-qdn90hc6fdcLAiqNSUmaJ2VBYr1-lIA&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAVMS%E9%94%80%E5%94%AE%E7%94%A8
vless://8344f431-926e-4777-c049-c2aa07b16a8b@de.yienergysmarthome.com:27634?encryption=mlkem768x25519plus.native.0rtt.TItrCqFO5YqkHCiUUSFkeOlv_6s7r1NEd1uKC7uF8TBO5jNYiPipDJFXIAZ_CmREJrmgByIinDtMz_IongtNQId9Xrtx_VKjBfLCnqkNgoNEbMwo2pmbNphpcenFvOnLnQEmEtUEWfQX1NZ_6xVfz-c9pxELcbUM7yNEr7Z28tpdb1TNdGMlvZPEQshTrKi4Sou6pCY9K-Z63fAg16t7bQymTJg1iihXc7mWETE8j_jIWEzE_apXpcimBvJj2nsYmRUv2FsyxqKK7aoK8WKQogWcASXGZddoDxlWIoqZmxS4c1oEPzzA2tcIZsRYf3BRqwWtQ3jNsLCspVcFXfmauEs3wlY77yFHwhtKk8SNW_EDfpWjGsBa4uWujiFoSwKY6LOLH5mWmHe7qENDA0NNgsSIg7WfdiC0OJUay7OMFtYwVlk_lXe18gPFvbdxgFrNbJmklHUtvnuaUku1vVaRF6RGxsqTJFxNk9HJ8omXmYK5l6hNzQi5fRZACeeQGdhwtJmis1RWatJ5_wGQEXNyqkrKz3YaE-Wg2qFpwadauLRg6Ac6YEEuT-hypvTOg_MBexltP7N2a9M7VLp1ukAcLpltTSWeorIPJxSu4ZWRL3Z51mdyxcJ_sdqLVxoIB2RrtDG-RBgfR7hyOtSQZPWUjRfDKwYnMGaG_wZj16mQj9kcu4CNSakFoIyxnlcY5cC-8tSb39aigHuBBEuDWFoYtfa5WiJmRSIgI2eKyAE0QmcRuDUuKcJ7ZnGKtTW-lziLR_iPzozHFuI-xsq6ZrWKBjLJSPhAE6VmaCrGAnsp0axhWGIidHsT2wTDT1W3oPUKnBAh7TCvzSFnn8aBx-UJmNw23vCmPdiT5GQchOZ9F8ppn9dl1NuRKod-fHEEtdAPADZ6uINDEwyhf3GffwgeJTlu3bBsRdbMp3oAvboosiimttaUXoEHlFclA8dD0WJBcwGtkbFWFJHO7Nq01knJ2LoyPSjJSxZGOdAludAR7Wk8QtLEIOp4A1A7AZwt4zaBYtxQPsd1REIOall237ecoAIFWYtr0BWbZFUt8YRlVIipoNk1RJZyq1FeoopetiUKZTNWmuceu0Jn7lpGVfptqUh750O5LEkVv4xNpoSsYBND32QhJSd7q8AMdjJD61w_hee4ooKLTmbH2TerqtjEWRdRmvSZ69rEJzqz4pu-2sVRL6B1jRzBPUKjgEBGKoWk5PQJ7EUvM3WQdilpLtuC_FCBNmVT-oS4xRurRCNjAopoKpSOZUGrTfYbmyS1mFaRiXd2-CekXstL1zEoIFN0iKDISnSLaWMnd1y6ZVAl87HL_SCtBggQ3HFBVjlJgCwjZ_ZRdrG2gmd0GrR7cZaluMuvoHmHh7sIaRhHBycXhNUGBKyuhbMvL0MMZzgUUzkdAhPDQuFBIgG2bEN8Blc6Wup9KzzHjMOyvvvKMdBIS4WBkXk2_HN1RyHLZwgv44QV-pQCW6jNs4Mm7GIKymsv95dAS0pk8ANeXTungPN-BYqYFvRh_ExFGtHHsmR2dPKP42KLGh44IVJa3r_PXV7ELYg9-AlEU8b3o6wBa517Wm0&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=X2HLFnAutiGxWc7fj4a_laI93Fm71IEx-2nKsF0ZYCE&sid=5d0db1ff&pqv=QxR9ktI6j54XvgXHpsERXwg701Cqi0rVc3fdu7g9n3CyfEtwOvF17_-1xk_utN0Qm2D8lG_9x3oQnk555jWRBuLPj2sAXjXsN31v4VeESIDsMXFRuRo1KT3FdCgXluYbXqhJFCWth3eQwKeiOQOf39uztJVXt-aSlzwon74S4wMV8ctU4Cxic2RLdrlgjSbbizOzLKd06Yfdtqu0A0DE0rgb9q45qEfSI8dxRNyGKRkNgtuduJr4DfwMbHZ5l91IA_gCagFd4UCBmfXIJFnoDvRRz8vh0Klem4gPj2RYc_Uw3TnncM4y5JehM9pMq9kXPVvD2-b5vnWsukOJbDYdgO5B1n6DBsn71TtxG-gUbHP9_Us9uiT7An8anD3YfO6LCmUMDe3Lod4iMQeU--e-GQiEfCfs4eUc4r0kJs8M7rzq2XXYw2ZCa5iWfZX1Cn0aLq6UEyrbEV_g7V8okwe7isjfahliu8XSW6YBx3TLOHgXBZqulDN8SIuVMx5mIvWZXIqbG0BiJpdZ3CJOVpMBxVBGolFn_ADuyQgg18sue2sOxKugSrJaaqtU5ieFirzbCOolR8ePOH0-Iedrj7Q2LhQJjBWwbZ2bVqfPZiyqgbrfwmyyXYyaF5PVpDgNPqNaYgrsGQ4uLFvdpCgEjKviJGFxn8pW0inhRzZyuLD1Sm5DN6GWGLnPmU6WF_jp4DViN0_EfZChpU4u7Gd33SdAifgre448Hh7lr6jEr4wl9DMBZdkBsAeu8Uj9H8RgI8i1n4YrryUgIkULW7f3nB1fDMWVoTYkYOh6rj3waTQaErPKwlI73CmmcPfE3Bo0ksWeiRqwrA5HMPH8FcibVJ6aovOjOtKL99yVi-dHZP07HqTtyGIOmY0x74l4UBSo2LOZlbeClWFis288Gt2t8VIvtTMdQPjLx7cq4DCcKQlmMaWLu7klBgcEn8jy0ElVmnnvrFRss-asSrgQBqAx6cJVEVM4DwnTRyhWj2F8Pi73mdD7c9W6sOSAFbIwVei5LvdhmyA-8xIyfrPGH7nZzpLftRP5y5CgRH6SqM6K_FuxBijfF3pcilFcSY7TAr5etFRhKieW3uSVBcz77yge3gJjsX777iJGLMePHVpP_tcirHLCLPLrtgVqpDpTM82LTAG-pGtTRnb-jMu-CzNhZSnR_vQRnJQ0jyDOm0tsvuGl7UwXfIycxpEfFRdRkRyFQxdiq5FVbDyTLIWwxtAIBinDmElYHTSGLfQ2QLYFNgFppuhq8H5hdtwVwghIiTD_3TXSetmo0e3lLVniSQEwgYsxP562vkaId6-nn2rEfsCkMlAB2Z7Q7pf3Xb7XhuUD-ig-n0CsNbObA7Tm-jP7d6vXJ0Xbya-irePdFcaTtZ7v-tGeNJkeWsDmtZdCdRFXhL5rU7NcN_1-rRT12T5J7rws6ZYN9vFMZp_4l3NYzzcrsN-cf0mdoEq-BMGNFycPalQM1-7wdmzCLm-VoLauvgfr3_uQg62AUJhyeduPmaGmOfGsocqDPuIXMwpC7TJPA_z4nxcFRm3-psg-EHV08sIcV6hkVcHSbu8kDdiRCZz_3CefOjebEEb44UVAb0s80x3vvSocY-VXTWtR2x0IBI03bDiKhV49W5-7iLXCG5BaWZ1iv9EScSJgZ8uTNnT0v46KyRG1LlFQF91SiZw4hRJyP3j9RhXj6hwHvQiFlYVHJ6yBf1dlvMfvuTR3050nKFzfa4Qs4OGB0-zaERQBwoirG1p1zNYaddRds0siBgUEFNxXAYGTG2ImJu1zJ0TTbWOxT_1UrYWUpI6-hI7tqRpgXG55i9wD2DdXCF36_bT1bmD8HlWFiY02As9Ly6YfEORTyln7mm5McSj0FObWmA6gSV6pLBEsTXD8MPKhYVcryk1WvmW6i47oMzm91nrj8-XacuefG_AJvIpT6dRT2n0yFq8K2hOZPXUDFmAWj4syfYePm3cK6KNLl3XAF9pUHPBvfT4OIQ7sMAnU2-PijKM8jeXWCgWN_kPgMdCZbYwKvfrg2Aq_udMa2YnZ_25ZtJGxozVnWuclMRDLcKJA5BrPB--D4MpwUWzyn0ilXtViqKy3XXhmKmGyW7wnrgW63n634ro6EWDfuBSQGj6w_8z9sLVOxLuqPkLx-aWSYQYzQOf3TpVs2hPio7k9pETS1j-1_0USPhNHngQtK4X6QpRIB4NQ0cno1jzX2Xiy1K2n6GQ5eU9pZjsCRKFpRKaqkZ1HLgny9C3lriKd2YHFINca_U4VJPc8RBFqN97oaGWawT1ycypllglJU0bmDniGb5LKBuNNV88j-q8W1DizikhDUOEwiLhb5HUQqAF_Fb2_9FM8dxR7jtDYiHT-hs1D37eN4AIsFvedBoqn-9jVrMSlrrLWAjIDx13E_BcS0f-Oq-VNBwMQH8oKJSKDbXi8WuWZKPPOFtO0MT0NtfPmAWKhbRCj010JaGQP-Er8bdqbVfJUa9vUNWsUaCqBzLW0f3ud2hrZWLf04ZM70gcsF2AzOCIOXkj5WJNrl2zNJ1kHaUIS8_Eomap_pnWnhD9TVsI37DgPXdiEzcz1Az4Ivb4-C3XDDfpdz8juq1GnUmR9tKY&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAxts%E9%94%80%E5%94%AE%E7%94%A8
trojan://SYkPhwiJzZ@de.yienergysmarthome.com:25493?security=tls&alpn=h2%2Chttp%2F1.1%2Ch3&insecure=0&allowInsecure=0&type=ws&path=%2Fxdlbv#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AATR%E9%94%80%E5%94%AE%E7%94%A8
vless://783da2bc-4cf1-4866-d70e-c3d968f8dcd4@de.yienergysmarthome.com:36572?encryption=mlkem768x25519plus.native.0rtt.hSg7NsKMQVATKBAjV-sbSUWXNssI2dN8ljtwlZiy8ttfyRqyQVYmFyDHsBNGF3GHOpiSadeXeGhjDIDMXmtN3XcM4LkBSMw1LZxY2wwT6hFsiopNXhUJglOdMHVbzUMqLyxWomHP3nV7q-J2vLwFnwdCcGfBABdYFBaG_hkePSC_dHi7e1ZA2cqal1BJ9XtsLEsiHtBPeKtqHmVnH6gp4cueWdM2tWKW2iGE4RqzrqgYAtMiJcOymSi9vXGedZgvAA11gaI_HGpUEsBvWAKoWtZexvQXH8spXCM4LmFBzAlgJTqKqXFcNfa8fStFNWCCq2nIcgknWAZYwCVCdyMsm7c01FSllesGpvFfleiEnZVLd6F8_rZoEyajxIgZ4UFLI3OSpGm_CboFFqAYszNW1-XE07kXqxysC1W4xqRMVDx05HYesgyghEhAFxOC3AVBZrnEKteGbJQi1Bh27oRO7nCVXSBBUxG8-TSjcjJahUdfNRCl41zO9JzK1UBG01qTB_m-u1HEKZSgqho_DtpFL8GdZPZqHrpO0NWPuxXPeUUCpprFOxgA5kAqprQ7c3nBlHVgZCIUEmtWDliwWotdRELNcSdyLDjHYet3JpfCh1qv_5WaXFd7b-aWWio-jySiD7gWCTYseUS_c_zJlVdxF3oAdkhU8eWiZwyI0tEsH7Sb5CSsqUC4ALRw-bmeNoDHzbl84um4NThZBKe67RiXwZuD2HAXm0AQAyKtZImHq2xykrK_44akVaYaSgYjB1yzfSWncNY-EAgUWRsgMGsFGBVQ4-kBRjxXNPWXf1tFMAFUaIAYyqYxd0FzqtK77nPIpdQFkDOhEcF5tzEPS8ktAC2fbiDKw3w2Y8ZsTlLPYJytlct8s1Yz2oplyFcqc5h-Z4GloCy2WLlVVFW3wNPH1LuAShXG4cFHqoqlXBauVpIYwgIGkfYzvVAU3JCDndF1CacLzQa5vIKimkbBQ-m305KTO4DLknIbZlwSDZuQhfB7kjej9cSdwAgKLdidMnOdiZE99UEjOCrDTpZUAMh7yrcQvnKUD1dwdujL9AhAYAQ_ifMMS9th4TaRZkjLhnIJyIq-x5tAfjdU_8HCgaCFAEWlEvadE9Ab94IHUIa7UvSaH4gc_3cE8yNMWuCW7AZyJaxtOhN156tnVDMwJhWaFhMmE2CqySoxR1gHlIUn1XpsjWSbVaW32KScNviRWYehSMxSNawjvqoIKuPNq6R5GCStoXlxGCGEn5UxACuzgSaQAcKWsXZYKfC9Q7INKzRLUDRKypyI95k2h9ccoJEVj9h1q1OXT9UjjmxqRoiw1qLBnuG_hSYqH_RhYzNF-OHGjcdj7VgAf3prK1QVpxcpALgHAStnVfFEvzJ8cIZqpSqFVmixh1Z4ZRGVoQwQdOY-xEFUeTWfD7NTIjBfC9GiEPxrGXotx1zIF_QWxNUVAQSkwts-DoFNdEkI0hZmu2ugBGeiI3G_tJpI_FGqB_pq5EcCSUPMjIcZFuAD6tYMhWkWI5yIhpZvpFwUtCwBylQrBzF1VKQqjVXdrnESrH__xNxlIW_0PMbIYt6J0bhggks&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=1S18PyS3PedA5QOIIAxdsVRFAqwK8ke0xiEzLrZPpyk&sid=08a86ff1&pqv=zNQvABA8ulFXN3wC-NjvFCwL4hxnxig4sD5ffLHi0hIzoUxldKj_lYaxa5mceLfMiLniUcEiGFwxUNau7OE5OUzsomZIBuSybcRurZoqCexvRlbF0QKFDkqGK4M6YdrWOq4dVwCHO_WTo8bSYtRlGcE9Fs3_yzMaCdObQsl6n8vVTFH-Nq0DF9JNV5ontOV4H66trjhZBiXxHCrXt-B13gA3SXICSIJYCK57T2qqUqEOwqSKJ-1iwGG2V21fV846WjFpTjfzKLdAz85f1ElwE-jjpJgXwrxBYpU6lw6t0X_rFvEU_iwMbvCdYF1curhZXbTJ8DFZk5X5dBWIKqQbb16UIorPefi6tkP90qBVuvJsY4_HDZeWff1jHGtJIOBQlnaBKnWKNDxKS_tf1Z_jivtRA-XZm0A3aKBWlLSE5_M-H-1wD4L6ffYf7HeeZV1BI3pJiOL0FeL0ibzK3p54Ny-wxPMROpka1anbm920bHQIurVJ9eprm9LclIdYGZRL-K13EUB40hcHLl9RUtYAyPAyRHuqEo3lJKcuN45Ip_GtOD1Dom0edLKfM4ut3oQcR-Cy7ddzh3Zzvm6ilYIjfDosldaQOYIf_GH5GWR3T0r4jpR_hda7LjJnGEcogIzVt4oz1LQfgJmsWWr7RizFx4F4vUM5DsJcf82VWtdVjS9YTSKnD3Vdyud7BK9hdKzm_AXPP2VxN4IhkpmNbIiE9tBYVC6nGmftqrPBkaWIpnFyPmxU3l-Rq2SsbsZVwEXq7S8rCZJvcwukd57BZTmFWDqjpgUea1dpiLO1Xu8VaDHjLUEI2K-zGs-h8HENqCmt1kckQcnaFDDmHghpcgs-JqJWA93ThcnInHUJOq123dZIBHANlp8O7FBt_gLns8K49c9i4kmEHdn2bnQXIbtDKGef-0hQ1T2poLuyfIxErCkNB7fplXzJS3QMmsOlA2iRzNfz0W-POBT-jyERVcYcuM9AlpV022MkW9RXOSV_XmzOddGnNjHzeRfecMXtGgSViJgNJCfT6QbpXMs4f-h-CCZoj-5JFNLWfel3UAv0NEJjGv9sYo5m46wrwqPsh1u4WRhbjJcLSFPezAneJje9RLl_LJr4oo584p3Lzg9ek2RYNDewz_b95RIag91Y9XnaiBc1Xpp4cLcnRm0Eb-UOtENxVzE8kQG9Oh__MWidneUWh5XE2qNMHP2p4SsX4sBh46p8ahRV7JVTPfeqIdggqOy2QbXyIDH25JNqNcnJXU3nJn2rMLawvnrO3FckzViiACAndvS9_qTD9lCXvTX7To2THj-5J0GSXmKX2gpDfqETKkMS0QYfB3pX2SgNOCcwVyhFHHl7COUi1-T4VGcuAthJ4LOwTM2UlpsPfUfWKIjwZT_akkZMS3bdN2UFeQpdZGsNHXgTxgWTAP5AEEnyb4E34P_dUIZ596_lOiiy6Fz86KfZJ5LEB-bI7fGWfwDh4gYeLO0CD-hUJPbMRijp4TP3uTl15KU3ceq-eEXzfcpwD5it8WoGdynVvEM0E5Yb2NFTrHEGAnolsiH_68giFXT4cKc774SEtjJYp5fAJq-BMexRAj1QafdDbWa8fOuj2sybwX5vfyRQdjL6PN8oxJT_EXsN9HaqQN8JoPSsVjIf48kDMZRlF-KNpb5c3UoY_BBZp50OTaCZGe1EreeePmHvVTwWGDR7iJsXaPonG70KhLuR4__faknuepgmRUOqe-ldewCsAtVe8vmSN3Y95boRjRyZRENg_Lk0qLgT08YTr8E3pVM2Hw5_FyKjOunnK6wjT4OdP2tRdDWDbpd86Iie_mr1Qc0NzeRn7-x8iFuNimnJ9OjErJ5mkzIl84EVEzWaAuF3HXowR1-dpyIoqb8jrJjFUGZZBNkW8beroxr7o_915iOEkHgNW54Bw7XSKECCiHWns87Nsu89LAMo0ePWu4350sWLOTxJBuzuVqH9MvXj5vlE34825FWLJY9A05qxKluvZuXqEXwqZXMMpqHqxWCuLkFaslQysojpbpm3urDPCfVD1pQrDbLEdha72QVmo9c0e7AGRYc8gQLq6uJPu66vRMzIHsGmNPRgY3BrxBq_0hCFXLZbvSBip9oaowp-9Csw-U5Vwg_N5cBQLKwMu8hKqh9FmSOtZWNEwGfFBnKNufG7BVKCDOGXS_a_oeLOYrw-7Ot5bV5rPi3YB73TZOPmPmpxLBycjdwYergjKeVkLhsVzhlhsMbrqn2gCS8Py9GDNHI29CHNWHfpSGGk5rkAUR8AD8o3J0RnrQFewCbfxk2OBY8Lfmkp9jBrdPHfg06zCeYLih6JzCHSWCnLQ5Q2ucKfzdNjvAwIKDc28PLnh5jrpO1HRAJBiiTFKxT9d4T22VSlnFRy9i1Ty151vU7OrbIzyuKgV0yZrrganZRBJ4NRee2nn0S9hYxpod-4kuNqn0GSizaJx5mO0eGzF0nAQslIwKERu3LbNTzNO2gtjWrusAhlAdmDFdlQcC50D49O9i9v5rTiiVgprBmvlvLtE4x-S92B_zWsbZLFWNNEjlYjNW1W_6QsXwK0pf6T45oEMV3nWdIbppWzDL39runTNUdKrlFgZmvJ9HY&type=tcp&headerType=none#%E5%BE%B7%E5%9B%BD%F0%9F%87%A9%F0%9F%87%AAH1%E9%94%80%E5%94%AE%E7%94%A8
hysteria2://6aca9680-1437-4571-cf52-ae493ea0bd54@tk.yienergysmarthome.com:30582?sni=tk.yienergysmarthome.com&alpn=h2%2Chttp%2F1.1%2Ch3#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E9%94%80%E5%94%AE%E7%94%A8%20%E6%8A%97%E5%B9%B2%E6%89%B0
hysteria2://hio4be6eo5j6fmnv@tk.yienergysmarthome.com:46735?security=tls&fp=safari&alpn=h3&sni=tk.yienergysmarthome.com&obfs=salamander&obfs-password=22agjzbffae8hmct#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E9%94%80%E5%94%AE%E7%94%A8%2002%20%E6%9B%B4%E6%96%B0
tuic://d3439914-aa79-4193-bf0a-988ce00a67e4:rtglcdl33k4pvu38@tk.yienergysmarthome.com:38445?congestion_control=bbr&alpn=h3&sni=tk.yienergysmarthome.com&udp_relay_mode=native&allow_insecure=0#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E9%94%80%E5%94%AE%E7%94%A8%2003%20%E6%9B%B4%E6%96%B0
[Interface]
PrivateKey = 4LAbEdQ2arrqwGfPUpTB9FWkAk86Rz2YJ9hXnZiN63I=
Address = 10.0.0.2/32
DNS = 1.1.1.1, 1.0.0.1
MTU = 1280
wireguard://4LAbEdQ2arrqwGfPUpTB9FWkAk86Rz2YJ9hXnZiN63I%3D@tk.yienergysmarthome.com:38446?publickey=DL%2F658UAJzfEL%2BQaxmj8Z1gtkJmHPmkptlXFmaYQsCk%3D&address=10.0.0.2%2F32&mtu=1280&dns=1.1.1.1%2C%201.0.0.1#%E7%BE%8E%E5%9B%BD%F0%9F%87%BA%F0%9F%87%B8%E9%94%80%E5%94%AE%E7%94%A8%2004%E6%9B%B4%E6%96%B0
hysteria2://5a9278q4esw0nx0k@185.217.110.154:43971?#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%20%E9%94%80%E5%94%AE%E7%94%A801%20%E6%9B%B4%E6%96%B0
hysteria2://5a9278q4esw0nx0k@185.217.110.154:18936?#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%20%E9%94%80%E5%94%AE%E7%94%A802%20%E6%9B%B4%E6%96%B0
tuic://2aa84e66-312e-4494-86e8-35e9a84f0c9a%3Am2bf2dfxnpwnfesc@185.217.110.154:47588?alpn=h3&congestion_control=bbr#%E8%8B%B1%E5%9B%BD%F0%9F%87%AC%F0%9F%87%A7%20%E9%94%80%E5%94%AE%E7%94%A803%20%E6%9B%B4%E6%96%B0
# TUIC v5 Client Configuration (Clash / Mihomo / Clash Verge)
# 英国🇬🇧 销售用03 更新 - sales02
proxies:
  - name: "英国🇬🇧 销售用03 更新 - sales02"
    type: tuic
    server: 185.217.110.154
    port: 47588
    uuid: 2aa84e66-312e-4494-86e8-35e9a84f0c9a
    password: "m2bf2dfxnpwnfesc"
    alpn:
      - h3
    sni: 185.217.110.154
    congestion-controller: bbr
    udp-relay-mode: native
    reduce-rtt: truehysteria2://9eb788c8-30d4-412d-d161-2f1c7d399d59@em.yienergysmarthome.com:34268?insecure=1#Email%E5%A4%87%E7%94%A8
hysteria2://f9c160a2-c412-44ba-9723-4efc71c81e71@em.yienergysmarthome.com:42474?insecure=1#Email%E5%A4%87%E7%94%A81



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
