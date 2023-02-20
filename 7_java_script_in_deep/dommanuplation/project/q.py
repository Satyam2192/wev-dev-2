for _ in range(int(input())):
    sdvh = int(input())
    sscv = input()
    sdsdv, sv = 0, 0
    wgwrg = 0
    for i in range(sdvh):
        if sscv[i] == "U":
            sv += 1
        elif sscv[i] == "D":
            sv -= 1
        elif sscv[i] == "R":
            sdsdv += 1
        else:
            sdsdv -= 1
        if sdsdv == 1 and sv == 1:
            wgwrg = 1
            break
    if wgwrg == 0:
        print("NO")
    else:
        print("YES")
