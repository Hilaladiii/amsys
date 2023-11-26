
const TabelNilai = () => {
  return (
  <table className="w-full max-w-[930px] 2xl:max-w-[1050px] border-collapse table-auto animate-fade-up 2xl:text-[20px]">
              <thead className="font-semibold bg-[#CBD5E1]">
                <tr className="text-center">
                  <th>Mata Kuliah</th>
                  <th>Kuis</th>
                  <th>Tugas</th>
                  <th>UTS</th>
                  <th>UAS</th>
                  <th>Nilai Akhir</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border">PBO</td>
                  <td className="border">90</td>
                  <td className="border">87</td>
                  <td className="border">91</td>
                  <td className="border">90</td>
                  <td className="border">91</td>
                </tr>
                <tr className="text-center">
                  <td className="border">Pancasila</td> 
                  <td className="border">60</td> 
                  <td className="border">92</td> 
                  <td className="border">88</td> 
                  <td className="border">85</td> 
                  <td className="border">82</td> 
                </tr>
                <tr className="text-center">
                    <td className="border">Etika Profesi</td>
                    <td className="border">90</td>
                    <td className="border">80</td>
                    <td className="border">84</td>
                    <td className="border">90</td>
                    <td className="border">76</td>
                </tr>
                <tr className="text-center">
                    <td className="border">Pemrograman</td>
                    <td className="border">70</td>
                    <td className="border">83</td>
                    <td className="border">96</td>
                    <td className="border">80</td>
                    <td className="border">80</td>
                </tr>
                <tr className="text-center">
                    <td className="border">Kalkulus</td>
                    <td className="border">78</td>
                    <td className="border">76</td>
                    <td className="border">74</td>
                    <td className="border">89</td>
                    <td className="border">79</td>
                </tr>
                <tr className="text-center">
                    <td className="border">PKK</td>
                    <td className="border">90</td>
                    <td className="border">70</td>
                    <td className="border">72</td>
                    <td className="border">89</td>
                    <td className="border">80</td>
                </tr>               
              </tbody>
            </table>      
  )
}

export default TabelNilai